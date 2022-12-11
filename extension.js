// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');
const buttons = require('./src/buttons');
const accordions = require('./src/accordions');

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed

function enterText(text) {
  const editor = vscode.window.activeTextEditor;

  if (editor) {
    editor.edit(editBuilder => {
        editBuilder.insert(editor.selection.active, text);
    });
  }
}

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "kajabi-sage" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with  registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable1 = vscode.commands.registerCommand('kajabi-sage.openSageReact', function () {
		// The code you place here will be executed every time your command is executed

		// Display a message box to the user
		// vscode.window.showInformationMessage('Openning react docs!');
    vscode.env.openExternal(vscode.Uri.parse('https://sage-lib-storybook.herokuapp.com/'));
	});

	let disposable2 = vscode.commands.registerCommand('kajabi-sage.openSageDocs', function () {
		// The code you place here will be executed every time your command is executed

		// Display a message box to the user
		// vscode.window.showInformationMessage('Opening Sage docs!');
    vscode.env.openExternal(vscode.Uri.parse('https://sage-design-system.kajabi.com/pages/index'));
	});

  const sageElements = buttons.buttons.concat(accordions.accordions);

  let disposable = vscode.commands.registerCommand("kajabi-sage.sage", async function () {
    const element = await vscode.window.showQuickPick(sageElements, {
      matchOnDetail: true
    });

    if (!element) { return; }

    if (element) {
      enterText(element.text);
    }
  });

  context.subscriptions.push(disposable);

  // buttons.buttons.forEach((button) => {
  //   let disposable = vscode.commands.registerCommand(button.command, function () {
  //     enterText(button.text)
  //   })
  //   context.subscriptions.push(disposable);
  // });

  // accordions.accordions.forEach((button) => {
  //   let disposable = vscode.commands.registerCommand(button.command, function () {
  //     enterText(button.text)
  //   })
  //   context.subscriptions.push(disposable);
  // });

	context.subscriptions.push(disposable1);
	context.subscriptions.push(disposable2);
}

// This method is called when your extension is deactivated
function deactivate() {}

module.exports = {
	activate,
	deactivate
}
