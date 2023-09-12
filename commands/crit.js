exports.run = (client, message, args) => {
  if(isNaN(args[0])||isNaN(args[1])||isNaN(args[2])||isNaN(args[3])){
    message.channel.send("Invalid input. \nFormat \`\!crit crate1 cdmg1 crate2 cdmg2\`").catch(console.error);
  }else{
    var crate1 = parseFloat(args[0]);
    var crate2 = parseFloat(args[2]);
    var cdmg1 = parseFloat(args[1]);
    var cdmg2 = parseFloat(args[3]);
    var diff;
    var dmgdiff;
    var dmg1 = ((crate1/100) * (1 + (cdmg1/100)) + (1- (crate1)/100))*100;
    var dmg2 = ((crate2/100) * (1 + (cdmg2/100)) + (1- (crate2)/100))*100;
    var crit1 = (crate1/100) * (cdmg1/100);
    var crit2 = (crate2/100) * (cdmg2/100);
    var msg = ">>> **" + crate1.toString() + "\/"+ cdmg1.toString() + "** Average Damage: `" + dmg1.toFixed(2) + '\%`\n' + "**" + crate2.toString() + "\/"+ cdmg2.toString() + "** Average Damage: `" + dmg2.toFixed(2)+ '\%`\n'+ '\n';
    //if( (cdmg1 + (2*crate1)) > (cdmg2 + (2*crate2)) )
    message.channel.send(msg).catch(console.error);

    /*
    if( dmg1 > dmg2 ){
      dmgdiff = 100 * ((dmg1-dmg2)/dmg1);
      diff = 100 * ((crit1/crit2)-1);
      message.channel.send(crate1.toString() + "\/"+ cdmg1.toString() + " \> " + crate2.toString() + "\/"+ cdmg2.toString() + " by " + diff.toFixed(2) + "\%" +'\n' + crate1.toString() + "\/"+ cdmg1.toString() + ' does ' + dmgdiff.toFixed(2) + '\% more damage.').catch(console.error);
    }else{
      dmgdiff = 100 * ((dmg2-dmg1)/dmg2);
      diff = 100 * ((crit2/crit1)-1);
      message.channel.send(crate2.toString() + '\/'+ cdmg2.toString() + ' \> ' + crate1.toString() + '\/'+ cdmg1.toString() + ' by ' + diff.toFixed(2) + '\%' +'\n' + crate2.toString() + "\/"+ cdmg2.toString() + ' does ' + dmgdiff.toFixed(2) + '\% more damage.').catch(console.error);
    }
    */
  }
}