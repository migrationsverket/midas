import{j as e}from"./iframe-EvAXEFMI.js";import{$ as c}from"./Form-C9aUt5Bh.js";import{G as d}from"./Grid-eJDVxARM.js";import{G as i}from"./GridItem-OWkERrNR.js";import{T as t}from"./TextField-DXhj3Rz-.js";import{S as l}from"./Select-De531VpD.js";import{B as a}from"./Button-DNu20i5o.js";import{R as x,a as u}from"./Radio-DdGMLBtl.js";import{C as I}from"./CheckboxGroup-BJ7xq3sn.js";import{C as G}from"./Checkbox-Djmg6A-0.js";import{L as p}from"./ListBoxItem-D76BWNe2.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-CxbI4lJ8.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-CNd9s6u-.js";import"./useFocusRing-DfVRu85N.js";import"./index-BERR-sy9.js";import"./index-5Nx_3vzb.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-D4ri3mUJ.js";import"./TextField-CFUOlGCT.js";import"./FieldError-BYwZNEs3.js";import"./Text-C1bk4Rmu.js";import"./Text-CAHlbO0E.js";import"./RSPContexts-79mGs6IV.js";import"./Group-DG4QDBgu.js";import"./Input-Dm9Z5Owb.js";import"./Hidden-DF-gcxja.js";import"./Button-CoUp-4SO.js";import"./useLabels-CcKLbZF9.js";import"./useButton-CyNHfsAf.js";import"./useTextField-CAnMwNGO.js";import"./useControlledState-B-dx9B_p.js";import"./useField-Bz34INMU.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-CXiIiWVS.js";import"./Dialog-BHgz53KV.js";import"./OverlayArrow-BP1WHt_0.js";import"./useResizeObserver-CwL_yq3H.js";import"./Collection-CG3_0aNM.js";import"./index-BN8sygBb.js";import"./Separator-B-NA5MJa.js";import"./SelectionManager-D5SH1Aqt.js";import"./useEvent-CwuJt_mK.js";import"./scrollIntoView-C9rzGjd3.js";import"./SelectionIndicator-BjsEM9O1.js";import"./useDescription-DBAUb1QW.js";import"./ListKeyboardDelegate-Cf2KZwiC.js";import"./PressResponder-BrgAiC1q.js";import"./useLocalizedStringFormatter-LpBXKpWQ.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-C-4i_HdT.js";import"./VisuallyHidden-Bx2PPkoO.js";import"./x-DiiIVqZK.js";import"./createLucideIcon-Dkm_kHZA.js";import"./useLocalizedStringFormatter-BQT0Ev-t.js";import"./Heading-BdUvKCq1.js";import"./info-DHknlrQR.js";import"./Popover-BIBXvtep.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-SV7JSw-6.js";import"./DragAndDrop-COWk44OO.js";import"./inertValue-DNVxxWdG.js";import"./useListState-BmrZbIFN.js";import"./Tag-D-shBdAU.js";import"./useHighlightSelectionDescription-DvbKxG0P.js";import"./useUpdateEffect-gl58YIk9.js";import"./useHasTabbableChild-wV9VuNO6.js";import"./chevron-down-Cks5KcT4.js";import"./Button.module-Co5e5YHp.js";import"./check-CL6i3-fr.js";import"./useToggleState-Rq4g4OyH.js";import"./Virtualizer-BEZtSXgN.js";const Xe={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
