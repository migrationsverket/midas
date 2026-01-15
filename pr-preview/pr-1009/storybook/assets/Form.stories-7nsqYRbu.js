import{j as e}from"./iframe-DCfJfaw9.js";import{$ as c}from"./Form-Bf8QUsQ0.js";import{G as d}from"./Grid-D9nK3nVL.js";import{G as i}from"./GridItem-CsHgCZK4.js";import{T as t}from"./TextField-7tbdW8Mu.js";import{S as l}from"./Select-DBrZS88R.js";import{B as a}from"./Button-V9Ueln0f.js";import{R as x,a as u}from"./Radio-9V6FQQNc.js";import{C as I}from"./CheckboxGroup-Dcyqanrs.js";import{C as G}from"./Checkbox-BIOMpsz7.js";import{L as p}from"./ListBoxItem-DpqqjSrU.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-CqvO6KXE.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-BaNJ2jR_.js";import"./useFocusRing-7l2a3qeL.js";import"./index-DpFfOAB-.js";import"./index-CXk62c72.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-Ymh18E-z.js";import"./TextField-B8eJ5SaO.js";import"./FieldError-nGE6oTAK.js";import"./Text-VXJMN6tP.js";import"./Text-Bpd7w9CS.js";import"./RSPContexts-CJm8Gl1M.js";import"./Group-DQktKOlu.js";import"./Input-Cp_sO_y3.js";import"./Hidden-BCNvKZUC.js";import"./Button-Dkr17r5b.js";import"./useLabels-DoN94B0X.js";import"./useButton-CwqsyX1R.js";import"./useTextField-CJaawfmA.js";import"./useControlledState-CUvbN5NM.js";import"./useField-CiSkahL8.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-DpWFLNNu.js";import"./Dialog-C3UZe5Hi.js";import"./OverlayArrow-nZsAlrCE.js";import"./useResizeObserver-CuIqHVZp.js";import"./Collection-BBAyIAje.js";import"./index-DCcrf7Bi.js";import"./Separator-Dkjm1-Me.js";import"./SelectionManager-BDoopCov.js";import"./useEvent-DAfX2Xqj.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-BXCFDIjJ.js";import"./useDescription-DOUWC27Q.js";import"./ListKeyboardDelegate-CkR7oaGc.js";import"./PressResponder-BHP22pdz.js";import"./useLocalizedStringFormatter-D4155cJ9.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-CooP9AAC.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-Bc10YnsJ.js";import"./x-BohAPrtb.js";import"./createLucideIcon-Bs2c2aOV.js";import"./useLocalizedStringFormatter-D9mdIa23.js";import"./Heading-BIRhNi1H.js";import"./info-COeBVPIr.js";import"./Popover-BRS5FIeW.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-DvhbGpi_.js";import"./DragAndDrop-DkPeZFIk.js";import"./inertValue-CuaNMcVt.js";import"./useListState-Cz0U7O4g.js";import"./Tag-DMwRAygg.js";import"./useHighlightSelectionDescription-Dw3caVbb.js";import"./useUpdateEffect-CIAQ5RVW.js";import"./useHasTabbableChild-DpbFPIos.js";import"./chevron-down-BGLjAnHT.js";import"./Button.module-Co5e5YHp.js";import"./check-DLJpDCO-.js";import"./useToggleState-CoWbA7hm.js";import"./Virtualizer-DjCaSnjj.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
