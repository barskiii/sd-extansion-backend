import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Scam, ScamDocument } from './entities/scam.model';
import { isItScam } from 'scam-directory-scraper'

@Injectable()
export class CheckWebsiteService {
  constructor (@InjectModel(Scam.name) private scamModel: Model<ScamDocument>) {}

  // Checks url in database
  async searchCollection(url) {
    const scam = await this.scamModel.findOne({url: url})

    if (scam && scam.isItScam == true) {
      return {
        isItScam: true,
        details: {
          url: scam.url,
          category: scam.category,
          description: scam.description,
          article: scam.article
        }
      }
    } else if (scam && scam.isItScam == false) {
      return {
        isItScam: false,
        details: {}
      }
    }
    return null
  }

  // Checks url on scam.directory
  async scrapDirectory(url) {
    const scam = await isItScam(url)
    
    return scam
  }

  // Saves url to db
  async saveScrapedData(url, scam) {
    let data = {}
    if (scam.isItScam) {
      data = {
        url: url,
        isItScam: scam.isItScam,
        category: scam.details.category,
        description: scam.details.description,
        article: scam.details.article
      }
    } else {
      data = {
        url: url,
        isItScam: scam.isItScam
      }
    }

    const document = new this.scamModel(data)

    await document.save()
    
  }
}
