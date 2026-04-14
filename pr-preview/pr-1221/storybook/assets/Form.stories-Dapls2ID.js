import{j as e}from"./iframe-D1Yo_ASl.js";import{c}from"./Form-BTzQwVTd.js";import{G as d}from"./Grid-DqNUPUwH.js";import{G as i}from"./GridItem-BJT6Xv2S.js";import{a as x,R as u}from"./Radio-CenLuLlG.js";import{C as I}from"./CheckboxGroup-CEnkADpU.js";import{C as G}from"./Checkbox-CbP2jKQq.js";import{T as t}from"./TextField-CBVCBVeM.js";import{S as l}from"./Select-9pildoZw.js";import{L as p}from"./ListBoxItem-CfhNe7zr.js";import{B as a}from"./Button-DcFviok1.js";import"./preload-helper-PPVm8Dsz.js";import"./useFocusRing-B1B12oVM.js";import"./utils-CtPCKdFP.js";import"./clsx-B-dksMZM.js";import"./index-C22-80z0.js";import"./index-DHyWBhXo.js";import"./clsx-Ciqy0D92.js";import"./Group-CAMsnLF6.js";import"./FieldError-BrTiJca0.js";import"./Text-CC_-JfUc.js";import"./Text-Cm1JxqTj.js";import"./Button-M2F6_Qz4.js";import"./Hidden-BeKvJ1wg.js";import"./useLabel-yNR7PxFA.js";import"./useLabels-ETtHkWia.js";import"./useButton-BA9v4nYB.js";import"./SelectionIndicator-BkCDLdi0.js";import"./useField--yXn37df.js";import"./VisuallyHidden-BaAY3BDc.js";import"./useControlledState-DI2wiQtX.js";import"./Label-CzSxrwtj.js";import"./Dialog-CT-IvoQF.js";import"./RSPContexts-TtF35Naa.js";import"./OverlayArrow-C08_D7Db.js";import"./useResizeObserver-CjU5NYfI.js";import"./Collection-BHwdqdom.js";import"./index-BgxIfYNz.js";import"./Separator-DkUo04Vc.js";import"./SelectionManager-Cl2qeWIC.js";import"./useEvent-CR9RVJbO.js";import"./scrollIntoView-BpMLfVQa.js";import"./useDescription-DFWHaatp.js";import"./ListKeyboardDelegate-C-tPikMB.js";import"./PressResponder-DPFebpjq.js";import"./useLocalizedStringFormatter-vgTNRLY_.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BLsBHLpF.js";import"./getScrollParent-CqYMlGok.js";import"./Modal-BxS1hXlz.js";import"./x-Dx4ggZKu.js";import"./createLucideIcon-B2W31-43.js";import"./useLocalizedStringFormatter-CdrMB43o.js";import"./Heading-D21J0EHb.js";import"./info-Cam4-x-Q.js";import"./Popover-DEkZ7Lnp.js";import"./check-Bw3OGSgT.js";import"./useToggleState-CI0HlWh1.js";import"./TextFieldBase-F7AxtkMJ.js";import"./Input-bSTNyt_1.js";import"./useTextField-BXYFaxrk.js";import"./TextField.module-DdivwlC8.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-DjMJffib.js";import"./DragAndDrop-4GTLm9po.js";import"./inertValue-CxTIaMMc.js";import"./useListState-C1fWjxVr.js";import"./TagGroup-DPUtYVT3.js";import"./useHighlightSelectionDescription-DXyOHdh8.js";import"./useUpdateEffect-O-Y4uWUh.js";import"./useHasTabbableChild-CigW9Ldv.js";import"./chevron-down-CtWRX8ym.js";import"./Virtualizer-CNkoJwCN.js";import"./Button.module-BB7N-cLd.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
