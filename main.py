import discord
import random
from discord.ext import commands

client = commands.Bot(command_prefix="$", intents=discord.Intents.all())

@client.event
async def on_ready():
    print("Edura Connected")
    await client.tree.sync()
    await client.change_presence(activity=discord.Game('/info'))

@client.tree.command(description="Get help and information about CalcIB!")
async def info(interaction: discord.Interaction):
    await interaction.response.send_message(f"""
                   **Welcome to Edura**
>>> A bot created for the FraserHacks submission, focusing on tasks related to education. 
**Some commands are:**
- Learn about the bot/get help: `$info` 
-
**Hope this helps!{interaction.user.mention}""")

client.run('MTMxMjA4NDYyNTkwODA0MzgxNg.GMeS7K.8t5RF7SS1pheEPwY8FV4nEkjyqTBhosFcQLqVc')
