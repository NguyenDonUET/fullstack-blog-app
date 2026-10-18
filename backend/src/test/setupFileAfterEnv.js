/**
 * we will define a beforeAll
function to initialize our database connection in Mongoose before all tests run and an afterAll
function to disconnect from the database after all tests finish running:
 */
import { beforeAll, afterAll } from '@jest/globals'
import { initDatabase } from '../db/init.js'
import mongoose from 'mongoose'

beforeAll(async () => {
  await initDatabase()
})

afterAll(async () => {
  await mongoose.disconnect()
})
