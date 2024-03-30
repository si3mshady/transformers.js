import { pipeline } from '@xenova/transformers';


class MyTranslationPipeline {
  static task = 'question-answering';
  static model =  'Xenova/distilbert-base-uncased-distilled-squad'
  ;
  static instance = null;

  static async getInstance(progress_callback = null) {
    if (this.instance === null) {
      this.instance = pipeline(this.task, this.model, { progress_callback });
    }

    return this.instance;
  }
}