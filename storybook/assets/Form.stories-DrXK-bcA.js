import{j as e}from"./iframe-DkQ7cM23.js";import{$ as c}from"./Form-DzbNYJh9.js";import{G as d}from"./Grid-CBOjmwQ7.js";import{G as i}from"./GridItem-CW2UlW0O.js";import{a as x,R as u}from"./Radio-WfU9iicL.js";import{C as I}from"./CheckboxGroup-Cl7WgMbc.js";import{C as G}from"./Checkbox-wbkWZ_2R.js";import{T as t}from"./TextField-D0pWE7MM.js";import{S as l}from"./Select-C6HDJZBZ.js";import{L as p}from"./ListBoxItem-DOn4Zu8y.js";import{B as a}from"./Button-rAjKvaV6.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-DP89l6Mv.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-Dq7frMih.js";import"./useFocusRing-J1vPyQty.js";import"./index-7VbimUOa.js";import"./index-Cm61l895.js";import"./clsx-Ciqy0D92.js";import"./Group-BXvkB0rz.js";import"./FieldError-BqQ6odJM.js";import"./Text-mqMgoxWe.js";import"./Text-DsOkgq9m.js";import"./Button-Bq2iEg50.js";import"./Hidden-CcF5EX2e.js";import"./useLabels-DSl379fi.js";import"./useButton-BmC4cDXT.js";import"./SelectionIndicator-DvMKftvJ.js";import"./useField-m7hj4lqE.js";import"./VisuallyHidden-DiP98uOJ.js";import"./useControlledState-nr5IMB9l.js";import"./Label-CSlXMnDA.js";import"./Dialog-BcSjotPK.js";import"./RSPContexts-9PmMy4Xi.js";import"./OverlayArrow-DHPm4C8s.js";import"./useResizeObserver-BSQ8BgXf.js";import"./Collection-Vv4nNf0n.js";import"./index-CloDF_gA.js";import"./Separator-BITAZruS.js";import"./SelectionManager-5ZpvjCOe.js";import"./useEvent-grDVPgOX.js";import"./scrollIntoView-DGwr96lc.js";import"./useDescription-D6gfKm05.js";import"./ListKeyboardDelegate-De3HO-6t.js";import"./PressResponder-KzePx3gP.js";import"./useLocalizedStringFormatter-BMIv7Yjf.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-rGqN7s8e.js";import"./getScrollParent-C8j_9fYa.js";import"./x-CkWkpKml.js";import"./createLucideIcon-DkseUJ3l.js";import"./useLocalizedStringFormatter-C95F42C0.js";import"./Heading-ByI2JxVS.js";import"./info-DnvQkoqt.js";import"./Popover-D-McFHBe.js";import"./check-qoUAuvVR.js";import"./useToggleState-DmBXFeMt.js";import"./TextFieldBase-DL_JGANi.js";import"./Input-BVO-wqcD.js";import"./useTextField-BJBXdHfK.js";import"./TextField.module-DdivwlC8.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-DiMOhNVH.js";import"./DragAndDrop-GahRsYmw.js";import"./inertValue-BSuFgDpz.js";import"./useListState-DRACNuHI.js";import"./TagGroup-CgG6zFSU.js";import"./useHighlightSelectionDescription-B6JFP4IN.js";import"./useUpdateEffect-Y8k3yS49.js";import"./useHasTabbableChild-BNNTEIzd.js";import"./chevron-down-iO3iWiQt.js";import"./Virtualizer-BW30lNjj.js";import"./Button.module-D_C6WeTN.js";const Xe={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const Le=["SimpleForm","TwoColumnForm"];export{o as SimpleForm,s as TwoColumnForm,Le as __namedExportsOrder,Xe as default};
