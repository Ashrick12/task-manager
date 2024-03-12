import json

def read_file():
    file = open('static/js/task.json')
    contents = json.load(file)
    return contents
def write_file(contents):
    file = open('static/js/task.json', 'w')
    json.dump(contents, file, indent=6)

if __name__ == '__main__':
    print(read_file())