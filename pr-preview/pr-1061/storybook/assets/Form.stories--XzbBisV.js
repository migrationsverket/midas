import{j as e}from"./iframe-eQfj5TyR.js";import{$ as c}from"./Form-DlhcELXP.js";import{G as d}from"./Grid-Cc74e4RT.js";import{G as i}from"./GridItem-DPIXjySu.js";import{a as x,R as u}from"./Radio-aDZpNR54.js";import{C as I}from"./CheckboxGroup-JJcAK7WK.js";import{C as G}from"./Checkbox-Dq9YHRW8.js";import{T as t}from"./TextField-DDuAAnGf.js";import{S as l}from"./Select-KQeUC-bH.js";import{L as p}from"./ListBoxItem-DQJ74fPY.js";import{B as a}from"./Button-D4E-mWNd.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-B1fyRi3f.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-Ccm2Lj-G.js";import"./useFocusRing-FgnAwrg-.js";import"./index-BXO00OuG.js";import"./index-CIA7hP3J.js";import"./clsx-Ciqy0D92.js";import"./Group-Dwq_juAS.js";import"./FieldError-Banutwb4.js";import"./Text-Adt_UDUW.js";import"./Text-D1gBRjyS.js";import"./Button-Bl9G2J9w.js";import"./Hidden-DKvQ0UCo.js";import"./useLabels-D68jkqrd.js";import"./useButton-Bt3yaOy2.js";import"./SelectionIndicator-DTrHW9Yg.js";import"./useField-CfpZE-ZJ.js";import"./VisuallyHidden-wNpkr7eA.js";import"./useControlledState-BQkMHVAJ.js";import"./Label-DnLKZArJ.js";import"./Dialog-BdOZRepl.js";import"./RSPContexts-Ds5n5rrC.js";import"./OverlayArrow-AQ1O_GLb.js";import"./useResizeObserver-CL5hCH-U.js";import"./Collection-C_EJZkl4.js";import"./index-B9-vxnY5.js";import"./Separator-B13PBXpT.js";import"./SelectionManager-BSPVAL4T.js";import"./useEvent-gQ4dcrYq.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-BaMN0osh.js";import"./ListKeyboardDelegate-HsGsFezV.js";import"./PressResponder-B-WzlAfD.js";import"./useLocalizedStringFormatter-CGYFFa5T.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DOTj5QaS.js";import"./getScrollParent-Cpn7MDkE.js";import"./x-CCJfjDcD.js";import"./createLucideIcon-BnydqwKc.js";import"./useLocalizedStringFormatter-V6SfCR6T.js";import"./Heading-BZN5YGPJ.js";import"./info-V1oAvwTF.js";import"./Popover-XnePCbGS.js";import"./check-jhzSZYdH.js";import"./useToggleState-C-9PkayM.js";import"./TextFieldBase-9t4z0OYe.js";import"./Input-CyWcTvKo.js";import"./useTextField-hp_xXHUv.js";import"./TextField.module-Cm6797Xw.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-Dyy7c633.js";import"./DragAndDrop-SjHHQPQE.js";import"./inertValue-k2s7Bj5c.js";import"./useListState-FR7MblAO.js";import"./Tag-BT8jsSFW.js";import"./useHighlightSelectionDescription-DHsm5xW8.js";import"./useUpdateEffect-CUWSXjh_.js";import"./useHasTabbableChild-DSnpr4SD.js";import"./chevron-down-BgoeL-mi.js";import"./Virtualizer-Dzivd39t.js";import"./Button.module-Co5e5YHp.js";const Xe={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
