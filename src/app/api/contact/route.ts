import { NextRequest, NextResponse } from 'next/server';
import { MongoClient } from 'mongodb';

const MONGODB_URI = process.env.MONGODB_DATABASE_URL || 'mongodb+srv://techbrains21:12qn26ZQoeuPsMlP@proplaycreatives.zvg7ybi.mongodb.net/';

export async function POST(request: NextRequest) {
  try {
    const { name, email, category } = await request.json();

    // Validate required fields
    if (!name || !email || !category) {
      return NextResponse.json(
        { error: 'Name, email, and category are required' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Validate category
    if (!['brand', 'creator'].includes(category)) {
      return NextResponse.json(
        { error: 'Category must be either "brand" or "creator"' },
        { status: 400 }
      );
    }

    // Connect to MongoDB
    const client = new MongoClient(MONGODB_URI);
    await client.connect();

    const db = client.db('proplaycreatives');
    const collection = db.collection('contacts');

    // Check if email already exists
    const existingContact = await collection.findOne({ email });
    if (existingContact) {
      await client.close();
      return NextResponse.json(
        { error: 'Email already registered' },
        { status: 409 }
      );
    }

    // Create contact document
    const contactData = {
      name: name.trim(),
      email: email.toLowerCase().trim(),
      category,
      createdAt: new Date(),
      updatedAt: new Date()
    };

    // Insert into database
    const result = await collection.insertOne(contactData);

    await client.close();

    return NextResponse.json(
      { 
        success: true, 
        message: 'Contact information saved successfully',
        id: result.insertedId 
      },
      { status: 201 }
    );

  } catch (error) {
    console.error('Error saving contact:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const client = new MongoClient(MONGODB_URI);
    await client.connect();

    const db = client.db('proplaycreatives');
    const collection = db.collection('contacts');

    const contacts = await collection.find({}).sort({ createdAt: -1 }).toArray();

    await client.close();

    return NextResponse.json({ contacts });
  } catch (error) {
    console.error('Error fetching contacts:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
} 