import{j as e}from"./iframe-CVh3nSma.js";import{$ as c}from"./Form-VdedL44P.js";import{G as d}from"./Grid-CXux5mny.js";import{G as i}from"./GridItem-DUIuFBBB.js";import{a as x,R as u}from"./Radio-cMAxA_Yx.js";import{C as I}from"./CheckboxGroup-lZy2wLSi.js";import{C as G}from"./Checkbox-CCTVpwCJ.js";import{T as t}from"./TextField-B7OhhpiF.js";import{S as l}from"./Select-DkwN7TTO.js";import{L as p}from"./ListBoxItem-BRJ-6ih4.js";import{B as a}from"./Button-CBEr-IVd.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-DAl4r7ZI.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-B1wWlh02.js";import"./useFocusRing-DevKcWYf.js";import"./index-DZnEqQgx.js";import"./index-Cw_mWNji.js";import"./clsx-Ciqy0D92.js";import"./Group-CB2aqcm1.js";import"./FieldError-DrvXZ_4S.js";import"./Text-BmDZHzTH.js";import"./Text-D6VK4Tm3.js";import"./Button-CjHZLp4M.js";import"./Hidden-CKFlO9gT.js";import"./useLabels-BlYxGBYn.js";import"./useButton-Cv89nSdu.js";import"./SelectionIndicator-CN5UGb_C.js";import"./useField-2EgC1qtj.js";import"./VisuallyHidden-8g-Kxj9j.js";import"./useControlledState-Cgai1Xo4.js";import"./Label-CH1NNf6J.js";import"./Dialog-bQn8xM8O.js";import"./RSPContexts-BTXC2TF-.js";import"./OverlayArrow-B3EZSU0Y.js";import"./useResizeObserver-hHhXNlSt.js";import"./Collection-BJu2ybUs.js";import"./index-BwGuzPfC.js";import"./Separator-L_50hZrU.js";import"./SelectionManager-CKXVu5xB.js";import"./useEvent-BeLY2gpF.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-Lg2ymasT.js";import"./ListKeyboardDelegate-CCOJkWMX.js";import"./PressResponder-CowuREYc.js";import"./useLocalizedStringFormatter-CIu9Ev8Y.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-CbOE0HRn.js";import"./getScrollParent-Cpn7MDkE.js";import"./x-B6y8n7rP.js";import"./createLucideIcon-DiDsoOCy.js";import"./useLocalizedStringFormatter-DsUDPIO8.js";import"./Heading-CKWun0e5.js";import"./info-CrWSfsjz.js";import"./Popover-BLtMkNqW.js";import"./check-ZzSV_4jX.js";import"./useToggleState-Duj060PO.js";import"./TextFieldBase-uNRB3RHh.js";import"./TextField-C--5MlFN.js";import"./Input-BeorgtYG.js";import"./useTextField-C7Da0rb3.js";import"./TextField.module-DpzeWGpt.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-CCk3jJXY.js";import"./DragAndDrop-DxwW22tU.js";import"./inertValue-CaDZVMzj.js";import"./useListState-CBBcujpX.js";import"./Tag-DA63UQQk.js";import"./useHighlightSelectionDescription-CleTC6D-.js";import"./useUpdateEffect-PVvS_7va.js";import"./useHasTabbableChild-XRu1mCQC.js";import"./chevron-down-CYf5JUcX.js";import"./Virtualizer-BLIKLW9n.js";import"./Button.module-Co5e5YHp.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
