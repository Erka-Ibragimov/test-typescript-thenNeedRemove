class Task {
  constructor(public priority: number) {}
}

class TaskList {
  private tasks: Task[] = [];

  constructor() {}

  public sortByPriority() {
    this.tasks = this.tasks.sort((a, b) => {
      if (a.priority > b.priority) {
        return 1;
      } else if (a.priority == b.priority) {
        return 0;
      } else {
        return -1;
      }
    });
  }

  public addTask(task: Task) {
    this.tasks.push(task);
  }

  public getTask() {
    return this.tasks;
  }
  public count() {
    return this.tasks.length;
  }
}

interface IIterator<T> {
  current(): T | undefined;

  next(): T | undefined;

  prev(): T | undefined;

  index(): number;
}

class PriorityTaskIterator implements IIterator<Task> {
  private position: number = 0;
  private taskList: TaskList;

  constructor(taskList: TaskList) {
    this.taskList.sortByPriority();
    this.taskList = taskList;
  }

  current(): Task | undefined {
    return this.taskList.getTask()[this.position];
  }
  next(): Task | undefined {
    this.position += 1;
    return this.taskList.getTask()[this.position];
  }
  prev(): Task | undefined {
    this.position -= 1;
    return this.taskList.getTask()[this.position];
  }
  index(): number {
    return this.position;
  }
}
