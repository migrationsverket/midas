import{j as e}from"./iframe-DD86HrH2.js";import{c}from"./Form-CeuJdreE.js";import{G as d}from"./Grid-oanvxp33.js";import{G as i}from"./GridItem-BtLqegEM.js";import{a as x,R as u}from"./Radio-CutgVEoJ.js";import{C as I}from"./CheckboxGroup-9gHPWlyn.js";import{C as G}from"./Checkbox-zdSKKN4O.js";import{T as t}from"./TextField-CS98uLtx.js";import{S as l}from"./Select-K12bAG5Q.js";import{L as p}from"./ListBoxItem-B4O-rfH8.js";import{B as a}from"./Button-BFvCKzsz.js";import"./preload-helper-PPVm8Dsz.js";import"./useFocusRing-BexPlixw.js";import"./utils-COpPBJUa.js";import"./clsx-B-dksMZM.js";import"./index-BRqGpYZa.js";import"./index-c37RaAEE.js";import"./clsx-Ciqy0D92.js";import"./Group-B11b6zrd.js";import"./FieldError-DI4cB23D.js";import"./Text-DuibH3v7.js";import"./Text-CmsABE1n.js";import"./Button-Dlxsdkdy.js";import"./Hidden-DxNA2jAI.js";import"./useLabel-Bo2GeM8m.js";import"./useLabels-C7ZzmUeQ.js";import"./useButton-D2fUs3pD.js";import"./SelectionIndicator-BdMqMuAi.js";import"./useField-K4C8pkC3.js";import"./VisuallyHidden-DI8ejz9M.js";import"./useControlledState-k07B6mZK.js";import"./Label-SzfbAhNJ.js";import"./Dialog-CrlKk7BZ.js";import"./RSPContexts-OgLCyc19.js";import"./OverlayArrow-CgrBU6Ge.js";import"./useResizeObserver-B3pATvfR.js";import"./Collection-CJicqcV9.js";import"./index-BMz79FiH.js";import"./Separator-B4Ge26sb.js";import"./SelectionManager-BvPH3Yxz.js";import"./useEvent-ChusgNbw.js";import"./scrollIntoView-CuCYXK6V.js";import"./useDescription-CyBHIiEQ.js";import"./ListKeyboardDelegate-qA9M4eDd.js";import"./PressResponder-BhsHjNTF.js";import"./useLocalizedStringFormatter-CL-qCV33.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-CWGeksXq.js";import"./getScrollParent-CvIpxtIQ.js";import"./ModalOverlay-C5rtQ2Yv.js";import"./x-BX_qSKOQ.js";import"./createLucideIcon-DzgrZqcN.js";import"./useLocalizedStringFormatter-rPCKOnn1.js";import"./Heading-BxI44wnh.js";import"./info-6PV5BiCf.js";import"./Popover-Dusd1fK0.js";import"./check-DnxiYyoz.js";import"./useToggleState-B4u824Lz.js";import"./TextFieldBase-CQC_8Pps.js";import"./Input-DaAIxGI2.js";import"./useTextField-BtX9gWJC.js";import"./TextField.module-DdivwlC8.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-CjwTVGem.js";import"./DragAndDrop-LyW6lOqH.js";import"./inertValue-Dm2mRv5P.js";import"./useListState-2zkSSHQN.js";import"./TagGroup-CaqteCj9.js";import"./useHighlightSelectionDescription-B8oQjWt4.js";import"./useUpdateEffect-CMS3qKmg.js";import"./useHasTabbableChild-B3nneAme.js";import"./chevron-down-Irbi1TdP.js";import"./Virtualizer-D3_oPhWq.js";import"./Button.module-BB7N-cLd.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
