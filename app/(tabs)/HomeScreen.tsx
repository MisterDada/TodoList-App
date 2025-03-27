import { StyleSheet, Text, View, TouchableOpacity, Button, TextInput, KeyboardAvoidingView} from 'react-native'
import { useState } from 'react'
import React from 'react'

const Landing = () => {

  const [tasks, setTasks] = useState<string[]>([])
  const [task, setTask] = useState('')

  const addTask = () => {

    if(task == ''){
       alert('Please enter a task')
    } else{
      setTasks([...tasks, task])
      setTask('')
      console.log(task)
    }


   
  }




  return (
    <View style={styles.main}>
      <View style={{alignItems: 'center'}}>
        <Text style={{fontSize: 30}}>
          Todo App
        </Text>
        </View>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <TextInput style={styles.textfield} placeholder="Enter Task" onChangeText={(text) => setTask(text)} />
        <Button title='Add Task' onPress={addTask} />
      </View>
      
      <View style={{alignItems: 'center'}}>
      <Text style={{fontSize: 30}}>Tasks</Text>
      </View>
     
      <View style={styles.taskcontainer}>
        {tasks.map((task, index) => (
          <View key={index} style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text>{index + 1}</Text>
            <Text style={{color: 'black'}}>{task}</Text>
            <TouchableOpacity onPress={() => setTasks(tasks.filter((t, i) => i !== index))}>
              <Text style={{color: 'red'}}>Delete</Text>
            </TouchableOpacity>
          </View>
        )

)}
      </View>
      
      
    </View>
  )
}

export default Landing

const styles = StyleSheet.create({
  main: {
    flex: 1,
    paddingTop: 50,
    paddingBottom: 50,
  },
  textfield:{
    borderWidth: 1,
    borderColor: 'black',
    padding: 8,
    margin: 10,
    width: 300,
    borderRadius: 5,
  },
  taskcontainer:{
    flex: 1,
    margin: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
  }
})