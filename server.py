from flask import Flask, request, render_template, jsonify
from task import read_file, write_file
import json
import mimetypes
mimetypes.add_type('application/javascript', '.js')
mimetypes.add_type('text/css', '.css')


app = Flask(__name__)

@app.route('/index.html', methods=["GET", "POST"])
@app.route('/', methods=["GET", "POST"])
def index():
    contents = read_file()
    if request.method == "POST":
        task = request.form.get('new-task')
        category = request.form.get('category')
        print(task)
        print(category)
        contents[category].append([task, False])
        write_file(contents)
    return render_template('index.html', daily=contents['daily'], weekly=contents['weekly'], monthly=contents['monthly'])

@app.route('/update-task', methods=['POST'])
def update_task():
    data = request.get_json()
    taskName = data['taskName']
    isChecked = data['isChecked']

    tasks = read_file()

    # Update the task status
    for category in tasks:
        for task in tasks[category]:
            if task[0] == taskName:
                task[1] = isChecked
                break

    write_file(tasks)

    return jsonify({'message': 'Task updated successfully'}), 200


if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=8000)