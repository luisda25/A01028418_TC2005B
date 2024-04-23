/*
Script to provide a method to change scenes used from the UI buttons
Luis Daniel Filorio Luna
*/

using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class SceneChanger : MonoBehaviour
{
   public void GoTo(string sceneName)
   {
    UnityEngine.SceneManagement.SceneManager.LoadScene(sceneName);
   }
}
