import{j as e}from"./iframe-CG21FvLg.js";import{c}from"./Form-DCvqDcwU.js";import{G as d}from"./Grid-XEEjyFww.js";import{G as i}from"./GridItem-BoLddKbu.js";import{a as x,R as u}from"./Radio-BxKI9Wod.js";import{C as I}from"./CheckboxGroup-eGe973cw.js";import{C as G}from"./Checkbox-B-_9vtSC.js";import{T as t}from"./TextField-CMITj1ZJ.js";import{S as l}from"./Select-BRBrvccZ.js";import{L as p}from"./ListBoxItem-DVPpNFqG.js";import{B as a}from"./Button-DTO_Qu1U.js";import"./preload-helper-PPVm8Dsz.js";import"./useFocusRing-UKlSaOwL.js";import"./utils-Dfpd-lDd.js";import"./clsx-B-dksMZM.js";import"./index-DJQDMjGE.js";import"./index-DIUOAeZ0.js";import"./clsx-Ciqy0D92.js";import"./Group-DUq970bw.js";import"./FieldError-D1k-tzt9.js";import"./Text-D17DsBlZ.js";import"./Text-DYV6Mtqz.js";import"./Button-eYd2LYW1.js";import"./Hidden-DHiBRU7w.js";import"./useLabel-CK6_zand.js";import"./useLabels-DbIZAWFx.js";import"./useButton-EC9QZCu0.js";import"./SelectionIndicator-BYoIF3tz.js";import"./useField-pxlW-odg.js";import"./VisuallyHidden-B-Rie-TX.js";import"./useControlledState-py48MqsP.js";import"./Label-CzrlB_hv.js";import"./Dialog-CFObKHxI.js";import"./RSPContexts-bVWhtwKV.js";import"./OverlayArrow--2SsuVm1.js";import"./useResizeObserver-ClupCXd0.js";import"./Collection-DKvsrM8n.js";import"./index-BMn1uAFZ.js";import"./Separator-CwHdkvyR.js";import"./SelectionManager-Ddjx_Pab.js";import"./useEvent-DK1Ig8Tf.js";import"./scrollIntoView-DbthYiWP.js";import"./useDescription-DzkVNNnf.js";import"./ListKeyboardDelegate-BsMDHkG0.js";import"./PressResponder-DPgccHON.js";import"./useLocalizedStringFormatter-CZfKgiZn.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DCWxWkNe.js";import"./getScrollParent-yFgCZLQn.js";import"./ModalOverlay-b0dkQchM.js";import"./x-DrfF8WsI.js";import"./createLucideIcon-DIP5Ktet.js";import"./useLocalizedStringFormatter-5oZjcWP5.js";import"./Heading-Bl-bKlIC.js";import"./info-5JnoM-IT.js";import"./Popover-VCd0dm5O.js";import"./check-Bxx9wuzt.js";import"./useToggleState-CedVBW-i.js";import"./TextFieldBase-BFxHp13B.js";import"./Input-BoL5jQWE.js";import"./useTextField-B4s5pB-U.js";import"./TextField.module-DdivwlC8.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-DLwE2VjX.js";import"./DragAndDrop-CSmD6Zku.js";import"./inertValue-BmD0wxbH.js";import"./useListState-D6HNd7ta.js";import"./TagGroup-Dy0csncX.js";import"./useHighlightSelectionDescription-DguVfHcx.js";import"./useUpdateEffect-DxQssupH.js";import"./useHasTabbableChild-CmKGzVWD.js";import"./chevron-down-CSnVjbiJ.js";import"./Virtualizer-BOvoOgv2.js";import"./Button.module-BB7N-cLd.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
