import PushNotification from "react-native-push-notification"
import { create } from "react-test-renderer"

  class NotificationManager {

    definirNavegador(novoNavegador)
    {
        navegador = novoNavegador
    }

    criarCanal = () => {
        PushNotification.createChannel(
            {
                channelId:"channel-id",
                channelName:"My Channel",
                channelDescription:"default",
                playSound:false,
                soundName:"default",
                vibrate:true
            },
            (created) => console.log('createChannel returned'  ,'$(created),')
        );
    }

      // Configuração orientada pela documentação do React Native Push Notification
      // Essa configuração garante o funcionamento da biblioteca no Android e no iOS
      configurar = () => {
          PushNotification.configure({
              onRegister: function (token) {
                  console.log("[NotificationManager] onRegister token:", token);
                },
              onNotification: function (notification) {
              console.log("[NotificationManager] onNotification:", notification);
              console.log("Ofertas" + notification.id);
              navegador.navigate("Ofertas" + notification.id)
          
              // Função de processamento da notificação 
              // Chamada quando uma notificação é recebida ou aberta
              notification.finish(PushNotificationIOS.FetchResult.NoData);
              },
          })
      }

      // É aqui que nossa notificação para o Android é construida
      criarNotificacao = (id, title, message, data = {}, options = {}) => {
          return {
              id: id,
              autoCancel: true,
              largeIcon: options.largeIcon || "ic_launcher",
              smallIcon: options.smallIcon || "ic_launcher",
              bigText: message || '',
              subText: title || '',
              vibrate: options.vibrate || false,
              vibration: options.vibration || 300,
              priority: options.priority || "high",
              importance: options.importance || "high",
              data: data,
              actions: ["Yes", "No", "..."],
              color:"red"          
          }
      }

      // Fução que exibe a notificação
      exibirNotificacao = (id, title, message, data = {}, options = {}) => {
          PushNotification.localNotification({
              /* Propriedades do Android */
              ...this.criarNotificacao(id, title, message, data, options),

              /* Propriedades do Android e iOS */
              title: title || "",
              message: message || "",
              playSound: options.playSound || false,
              soundName: options.soundName || 'default',
              userInteraction: false
          })
      }

      // Função que cancela todas notiificações e limpa as que estão no centro de notificações
      cancelar = () => {
          PushNotification.cancelAllLocalNotifications();
      }

      agendarNotificacao() {
        PushNotification.localNotificationSchedule({
            id:1,
            channelId:"1",
            repeatTime: 5 * 1000,
            repeatType:"time",
            title:"1 notificacao agendada",
            message:"Notificacao agendada",
            date: new Date(Date.now() + 5 * 1000),
            allowWhileIdle: false,
        });

        PushNotification.localNotificationSchedule({
            id:3,
            channelId:"channel-id",
            repeatTime: 5 * 1000,
            repeatType:"time",
            title:"2 notificacao agendada",
            message:"Notificacao agendada",
            date: new Date(Date.now() + 5 * 1000),
            allowWhileIdle: false,
        });
      }
      
  }

  export const notificationManager = new NotificationManager();