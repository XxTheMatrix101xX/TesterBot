const Discord = require('discord.js');
const client = new Discord.Client();
const config = require("./config.json");

//on Ready\set Game
client.on("ready", () => {
  console.log('Connected to Discord');
  console.log(`${client.user.id} is ready to serve in ${client.channels.size} channels on ${client.guilds.size} servers, for a total of ${client.users.size} users.`);
  client.user.setGame("with TheMatrix101's brain");
  console.log('Game Has been set');
});
//pm welcome bot
client.on('guildMemberAdd', member => {
    member.send("Welcome to testing of the new Kore wallet!\nThis bot is to help you with initial setup and download of the Kore wallet.\nFirst, may I ask if you are running windows or linux?\nPlease reply with a '?' in front, so if windows, do '?windows', for linux, '?linux'");
})

l = 0 //linux number of testers {base}
w = 3 //windows number of testers {base}
li = 0 //Linux Issues. This is probably due to user not having required repos. installing the listed repos might fix the issue.

client.on("message", (message) => {
    if (!message.content.startsWith(config.prefix)) return;

    if (message.content === config.prefix + 'test') {
        message.channel.send("```css\ngot it!```");
        console.log('test Requested');
    } else {
        if (message.content === config.prefix + 'windows') {
            message.channel.send("Here is the latest download.\n" + config.Download + "\nHere is a tool to make transition to the new wallet more smooth.\n" + config.MyTool1 + "\nOnce finish please reply ?complete")
            w = w + 1
            console.log("New user added, number of windows testers set to " + w)
        } else {
            if (message.content === config.prefix + 'linux') {
                message.channel.send("Here is the latest download.\n" + config.Download + "when ready please reply ?ready")
                l = l+1
                console.log("New user added, number of linux testers set to " + l)
            } else {
                if (message.content === config.prefix + 'ready') {
                    message.channel.send("Please open a terminal and cd to the directory inside kore and input\n```css\n./autogen.sh ; ./configure ; sudo make install```\nOnce completed you can run kore-qt to open your wallet.\n\nIf any of the steps fail input ?repos to get the command to download all needed repos for Kore")
                } else {
                    if (message.content === config.prefix + 'repos') {
                        message.channel.send("All these repositories are needed for Kore to run, especially with the graphical user interface")
                        message.channel.send("`sudo apt-get install software-properties-common -y\nsudo add-apt-repository ppa:bitcoin/bitcoin`")
                        message.channel.send("`sudo apt-get update && sudo apt-get upgrade -y`")
                        message.channel.send("`sudo apt-get install build-essential libtool autotools-dev automake pkg-config libssl-dev libevent-dev bsdmainutils libboost-all-dev libdb4.8-dev libdb4.8++-dev libminiupnpc-dev libzmq3-dev protobuf-compiler libqrencode-dev libsqlite3-dev libprotobuf-dev -y`")
                        message.channel.send("`sudo apt-get install libasound2-dev uuid-dev libuuid1 libqt5gui5 libqt5core5a libqt5dbus5 qttools5-dev qttools5-dev-tools liblog4cplus-dev libavdevice-dev libsndio-dev libjack-dev libavformat-dev  libopencore-amrnb-dev libopencore-amrwb-dev libswscale-dev libopus-dev libavcodec-dev libspeexdsp-dev libspeex-dev libsdl-dev libsdl2-dev libgsm1-dev -y`")
                        message.channel.send("If you still have issues please report it to one of the Admins, if TheMatrix101 is online try him first.")
                        console.log("Linux user requested repos")
                        li = li+1
                    } else {
                        if (message.content === config.prefix + 'complete') {
                            message.channel.send("Extract all files and move the initial setup application in with the kore-qt application.\nOnce finished, you should be able to run the initial setup application and that will setup everything.")
                            message.channel.send("If you have issues please report it to one of the Admins, if TheMatrix101 is online try him first.")
                        } else {
                            if (message.content === config.prefix + 'testers') {
                                message.channel.send("```css\nNumber of Linux testers " + l +"\nNumber of windows testers " + w +"\n\nLinux users who reported an issue with initial install " + li + "```")
                                
                            } else {
                                if (message.content === config.prefix + 'current') {
                                   message.channel.send(config.Download)
                                }
                            }
                        }
                    }
                }
            }
        }
    }
});



client.login(config.token);