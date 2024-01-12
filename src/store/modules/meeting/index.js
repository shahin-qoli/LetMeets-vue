import { finAgent } from "@/services/agent";

/**
 * Creates a new meeting by making a POST request 
 * to the /front/meetings endpoint. 
 * 
 * Logs the request payload and response data to the console.
 * Catches any errors and returns an empty object.
*/
export default {
    data() { },
    actions: {
        async createMeeting(context, payload) {
            try {
               
                let data ={
                    title: payload.title,
                    user_id: payload.userId,
                    url: payload.url,
                    location: payload.location,
                    suggested_times: payload.suggestedTime.map((item)=>{ return {start: item.start, end: item.end}}),
                    invited_emails: payload.invitedEmails}
                
                console.log(data)
                const { data: responseData } = await finAgent.post('/front/meetings',data)
                console.log(responseData)
            }
            catch(error) {
    
                    return {result:false, error: error}
                
            }
        }
    }
}