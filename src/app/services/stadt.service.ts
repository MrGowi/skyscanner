import { Injectable } from '@angular/core';


import { LoadingController } from "@ionic/angular";
import { createClient, SupabaseClient } from "@supabase/supabase-js";
import { Stadt } from "src/app/data/stadt";
import { environment } from "src/environments/environment";

export const STADT_TABLE = 'STADT_TABLE'

@Injectable({
  providedIn: 'root'
})
export class StadtService {

  private supabase: SupabaseClient

  constructor (private loadingCtrl: LoadingController) {
    this.supabase = createClient(environment.supabaseUrl, environment.supabaseKey)
  }

  createLoader() {
    return this.loadingCtrl.create()
  }

  async getStadt (id: number) {
    const { data, error } = await this.supabase
      .from(STADT_TABLE)
      .select('*')
      .eq('id', id)
      .single()

    return data || {}
  }

  async getStadts () {
    const { data, error} = await this.supabase
      .from(STADT_TABLE)
      .select('*')
      .order('name')

    return data || []
  }

  async updateStadt (stadt: Stadt) {
    const {data, error} = await this.supabase
      .from(STADT_TABLE)
      .update(stadt)
      .eq('id', stadt.id)
      .select()

    return data
  }

  async createStadt(stadt : Stadt) {

    const {data, error} = await this.supabase
      .from(STADT_TABLE)
      .insert({
        name: stadt.name,
      })
      .select('*')
      .single();

    return data
  }

  async deleteStadt (stadt : Stadt) {
    const {data, error} = await this.supabase
      .from(STADT_TABLE)
      .delete()
      .eq('id', stadt.id)
      .select()

    return data
  }

}
