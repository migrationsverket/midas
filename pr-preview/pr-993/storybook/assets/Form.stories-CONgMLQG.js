import{j as e}from"./iframe-Dme4yjiu.js";import{$ as c}from"./Form-DoobLXNm.js";import{G as d}from"./Grid-B00oB85k.js";import{G as i}from"./GridItem-HwWE4-1K.js";import{T as t}from"./TextField--YRp9DOD.js";import{S as l}from"./Select-z9Lqb2pS.js";import{B as a}from"./Button-4EvhTNdZ.js";import{R as x,a as u}from"./Radio-B_Os5Lq0.js";import{C as I}from"./CheckboxGroup-CKR5CLlW.js";import{C as G}from"./Checkbox-CvjHnY4P.js";import{L as p}from"./ListBoxItem-CqGW6w26.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-C0ovVE6C.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-DZ5-pBFL.js";import"./useFocusRing-BH-f8hm3.js";import"./index-BUbNZ358.js";import"./index-DKLwjLX-.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-Be2cGShc.js";import"./TextField-Cup0b4AQ.js";import"./FieldError-CkJz2AaO.js";import"./Text-DXZYfMN_.js";import"./Text-DD713WO-.js";import"./RSPContexts-BQOpdmbl.js";import"./Group-DuwQKWbm.js";import"./Input-BsmPhkeK.js";import"./Hidden-BfVEj4RM.js";import"./Button-Bc7NjFRN.js";import"./useLabels-DXCBowKy.js";import"./useButton-lWQWllBE.js";import"./useTextField-Dtbsg06d.js";import"./useControlledState-b57QaJLr.js";import"./useField-Dd5lDbx0.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-BBkilVP7.js";import"./Dialog-B_6NYUa7.js";import"./OverlayArrow-B7KMxShS.js";import"./useResizeObserver-C4nvYGQB.js";import"./Collection-CZI7j0K3.js";import"./index-CQtilxVo.js";import"./Separator-DPZyK2SN.js";import"./SelectionManager-DuN7DYtr.js";import"./useEvent-CHM24ifL.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-IEEWCpsi.js";import"./useDescription-egMW7gsS.js";import"./ListKeyboardDelegate-DxAL8Vyz.js";import"./PressResponder-wu7pC01l.js";import"./useLocalizedStringFormatter-Cww_SUFY.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-z6kZ4VOT.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-BChFqUzE.js";import"./x-DTC-oJ1p.js";import"./createLucideIcon-DWbFj2V-.js";import"./useLocalizedStringFormatter-8mUr0ZZo.js";import"./Heading-BL3c0JYi.js";import"./info-CsBGPV4J.js";import"./Popover--6lby_-v.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-csvdoGP2.js";import"./DragAndDrop-Csp40WaU.js";import"./inertValue-C_3yDzQf.js";import"./useListState-Cz5VWuPN.js";import"./Tag-F1OnhENn.js";import"./useHighlightSelectionDescription-Qjhs6QSD.js";import"./useUpdateEffect-HSWIhC-g.js";import"./useHasTabbableChild-BsjAj7zS.js";import"./chevron-down-fX-benCl.js";import"./Button.module-Co5e5YHp.js";import"./check-5hAfWmN3.js";import"./useToggleState-h1mlKmvq.js";import"./Virtualizer-DVuS7Zrf.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {},
  render: () => {
    const ITEMS = ['Banan', 'Apple', 'Mango'];
    return <Grid>
        <GridItem size={12}>
          <TextField label='Ange ditt fullständiga namn' description='Glöm inte dina eventuella mellannamn!' />
        </GridItem>
        <GridItem size={12}>
          <TextField label='Personnummmer' description='Anges på formen ÅÅMMDD-XXXX' />
        </GridItem>
        <GridItem size={12}>
          <Select label='Vilken är din favoritfrukt' placeholder='Välj en frukt' selectionMode='single' items={ITEMS.map(i => ({
          id: i,
          name: i
        }))}>
            {item => <ListBoxItem {...item}>{item.name}</ListBoxItem>}
          </Select>
        </GridItem>

        <GridItem>
          <Button>Skicka</Button>
        </GridItem>
      </Grid>;
  }
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {},
  render: () => {
    const ITEMS = ['A', 'B', 'C'];
    const RADIOITEMS = ['Anledning A', 'Anledning B', 'Anledning C'];
    return <div>
        <Grid>
          <GridItem size={{
          xs: 12,
          sm: 6
        }}>
            <RadioGroup label='Anledning' description='Ange anledning till att du söker i databasen'>
              {RADIOITEMS.map((item: string) => <Radio value={item} key={item}>
                  {item}
                </Radio>)}
            </RadioGroup>
          </GridItem>
          <GridItem size={{
          xs: 12,
          sm: 6
        }}>
            <CheckboxGroup label='Databas' description='Välj databas att söka i'>
              {ITEMS.map((item: string) => <Checkbox value={item} key={item}>
                  {item}
                </Checkbox>)}
            </CheckboxGroup>
          </GridItem>
          <GridItem size={{
          xs: 12,
          sm: 6
        }}>
            <TextField label='Namn' description='' />
          </GridItem>
          <GridItem size={{
          xs: 12,
          sm: 6
        }}>
            <TextField label='Personnummer' />
          </GridItem>

          <GridItem size={{
          xs: 12,
          sm: 6
        }}>
            <Select label='Kön' description='Kan lämnas tomt' placeholder='Välj kön' selectionMode='single' items={ITEMS.map(i => ({
            name: i,
            id: i
          }))}>
              {item => <ListBoxItem {...item}>{item.name}</ListBoxItem>}
            </Select>
          </GridItem>
          <GridItem size={{
          xs: 12,
          sm: 6
        }}>
            <TextField label='Ärendekod' />
          </GridItem>

          <GridItem size='auto'>
            <Button>Sök</Button>
          </GridItem>
          <GridItem size='auto'>
            <Button variant='secondary'>Rensa</Button>
          </GridItem>
        </Grid>
      </div>;
  }
}`,...s.parameters?.docs?.source}}};const ye=["SimpleForm","TwoColumnForm"];export{o as SimpleForm,s as TwoColumnForm,ye as __namedExportsOrder,Le as default};
