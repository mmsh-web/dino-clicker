import os
from flask import Flask, request, render_template, redirect, url_for, send_from_directory,abort,jsonify
import json
from datetime import datetime,timedelta




#server
app = Flask(__name__)
SRC=("static")



@app.route('/')
def index():
    print(1)
    ip = request.remote_addr
    return render_template('index1.html')

@app.route("/static/<filename>")
def file(filename):
    global SRC
    return send_from_directory(SRC, filename)


@app.route('/skins')
def index2():
    print(1)
    ip = request.remote_addr
    return render_template('index2.html')


@app.route('/shop')
def index3():
    print(1)
    ip = request.remote_addr
    return render_template('coming soon.html')

if __name__ == '__main__':
    print(f"!- All of your pages start running")
    app.run(host='0.0.0.0', port=4000, debug=True)
#5

