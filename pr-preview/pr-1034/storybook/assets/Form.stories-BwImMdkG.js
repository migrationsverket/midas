import{j as e}from"./iframe-Cs23SNnM.js";import{$ as c}from"./Form-CVu0dRDh.js";import{G as d}from"./Grid-Cl2iygnL.js";import{G as i}from"./GridItem-B5JiwgvU.js";import{a as x,R as u}from"./Radio-BWg3E6N9.js";import{C as I}from"./CheckboxGroup-Bcvir1jh.js";import{C as G}from"./Checkbox-ClujapYh.js";import{T as t}from"./TextField-zk9d0drk.js";import{S as l}from"./Select-BwzlYz4u.js";import{L as p}from"./ListBoxItem-CNQCOMmZ.js";import{B as a}from"./Button-BCDZMRqT.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-C2_5pI3u.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-jHVQBzvy.js";import"./useFocusRing-DZKbXbQf.js";import"./index-B6ChyHFT.js";import"./index-lqer093p.js";import"./clsx-Ciqy0D92.js";import"./Group-D5LCNvKt.js";import"./FieldError-B4JZATSQ.js";import"./Text-BDa847Zj.js";import"./Text-CyM4GXds.js";import"./Button-CXOOs0ZW.js";import"./Hidden-lOkM-Rk2.js";import"./useLabels-RZtTtySY.js";import"./useButton-CSZehrgP.js";import"./SelectionIndicator-Cc3mSVfG.js";import"./useField-QHKuD7kq.js";import"./VisuallyHidden-BbktJI4p.js";import"./useControlledState-BY7I6-dG.js";import"./Label-DEw2-4Bz.js";import"./Dialog-DnU-KzCJ.js";import"./RSPContexts-DaT_svkY.js";import"./OverlayArrow-BN9INqYv.js";import"./useResizeObserver-CqpeR5GJ.js";import"./Collection-BHf1D4jH.js";import"./index-BTAsETmW.js";import"./Separator-ChO5U5E4.js";import"./SelectionManager-kFiYZswY.js";import"./useEvent-DER49hg5.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-DCoi52oS.js";import"./ListKeyboardDelegate-Cy4sz5Tt.js";import"./PressResponder-CnMFxEty.js";import"./useLocalizedStringFormatter-CzEFj0TX.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DsrxlH0c.js";import"./getScrollParent-Cpn7MDkE.js";import"./x-DXozcBPC.js";import"./createLucideIcon-Cm58SIEr.js";import"./useLocalizedStringFormatter-BjD1Xbww.js";import"./Heading-FizbWtiG.js";import"./info-Dw1Q7jRF.js";import"./Popover-Dove32Y-.js";import"./check-CqMkfClo.js";import"./useToggleState-BliHoc2i.js";import"./TextFieldBase-B20c46rn.js";import"./TextField-Dq_Rojuh.js";import"./Input-DmBjsAvr.js";import"./useTextField-ChuvFLJ6.js";import"./TextField.module-DpzeWGpt.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-BPN2Hp4M.js";import"./DragAndDrop-D0MWa1jw.js";import"./inertValue-DnQyvIVv.js";import"./useListState-CB2uI-lF.js";import"./Tag-CfnfZKIs.js";import"./useHighlightSelectionDescription-BfQ0wFF0.js";import"./useUpdateEffect-Brpp3OgC.js";import"./useHasTabbableChild-CqkfXhev.js";import"./chevron-down-DA8AmIhp.js";import"./Virtualizer-B0zqLgJn.js";import"./Button.module-Co5e5YHp.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
