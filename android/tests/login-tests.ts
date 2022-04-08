import { remote, RemoteOptions, Browser } from "webdriverio";
import ProjectCapabilities from "../capabilities";
import LoginView from "../page-objects/login-page";
import { tapElement, setValueOfElement } from "../page-objects/base-page";

describe('Android App Test', function () {
	let driver: Browser<"async">;
	jest.setTimeout(6000);
	beforeEach(async function () {
		const remoteOptions: RemoteOptions = ProjectCapabilities.androidBaseCapabilities();
		driver = await remote(remoteOptions);
	});

	it('Insert pin', async function () {
		await tapElement(driver, LoginView.locators.button1);
		await tapElement(driver, LoginView.locators.button2);
		await tapElement(driver, LoginView.locators.button3);
		await tapElement(driver, LoginView.locators.button4);
		await tapElement(driver, LoginView.locators.button5);
		await tapElement(driver, LoginView.locators.button6);
		await tapElement(driver, LoginView.locators.buttonView);

		
	});

	afterEach(async function () {
		await driver.deleteSession();
	});
});
