import{j as n}from"./iframe-CA6SZRZZ.js";import{$ as j}from"./Form-Baul44NW.js";import{G}from"./Grid-2gS86Cyv.js";import{G as e}from"./GridItem-DvN8AR-0.js";import{T as r}from"./TextField-2V0XyvaZ.js";import{S as I}from"./Select-DaUk69mX.js";import{B as a}from"./Button-Cbmk_KNZ.js";import{R as g,a as b}from"./Radio-B5saN_0s.js";import{C as h}from"./CheckboxGroup-pBVPtxfO.js";import{C as k}from"./Checkbox-BeR--X1j.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-2ZyP1phw.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-D5uwjhMa.js";import"./useFocusRing-fFJ6kuim.js";import"./index-BjU1XaOI.js";import"./index-DSlf5zJ0.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-7vk9lHui.js";import"./TextField-DGg3viDu.js";import"./FieldError-eptSWAA3.js";import"./Text-D_56CWF2.js";import"./Text-tYUewxZu.js";import"./RSPContexts-7OWuaO5C.js";import"./Group-BydBj1Xi.js";import"./Input-SHMFyPE-.js";import"./Hidden-CCmfTaTK.js";import"./Button-DN8yOQAh.js";import"./useLabels-B0DH0USH.js";import"./useButton-BAsEgJLw.js";import"./useTextField-BNotQoAI.js";import"./useControlledState-PLuhDCQo.js";import"./useField-Bf5QTNTY.js";import"./TextField.module-Ddb2XBAw.js";import"./Label-DGzryVRU.js";import"./Dialog-dZoG0eH6.js";import"./OverlayArrow-SJYNL8o1.js";import"./useResizeObserver-Da870b49.js";import"./Collection-DtGtWtqd.js";import"./index-Cqw_zi5T.js";import"./Separator-BFPX7T15.js";import"./SelectionManager-BQUEpS73.js";import"./useEvent-DbRTNIkK.js";import"./scrollIntoView-CLWxqVb1.js";import"./SelectionIndicator-BIHwzBlG.js";import"./useDescription-CfkgIW30.js";import"./ListKeyboardDelegate-DHm8M76X.js";import"./PressResponder-BDc0o7ST.js";import"./useLocalizedStringFormatter-Bg5EICbh.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-NFVBbLWd.js";import"./VisuallyHidden-hwwFXgt8.js";import"./useLocalizedStringFormatter-BmdVOUmC.js";import"./x-CtGULCwg.js";import"./createLucideIcon-z5VyHdNI.js";import"./Heading-BHQ98Pjk.js";import"./info-C30IbHpa.js";import"./Popover-B46bakt5.js";import"./Tag-B8fGuzOE.js";import"./ListBox-CoRqBju0.js";import"./DragAndDrop-BUSejTKv.js";import"./inertValue-DsdzN5qf.js";import"./useListState-DxuClyn_.js";import"./useHighlightSelectionDescription-Zhdi3xNQ.js";import"./useUpdateEffect-BxulQmZ0.js";import"./useHasTabbableChild-BCFlH-9g.js";import"./check-ATi8QVkC.js";import"./ListBoxSection-CZKsdT9r.js";import"./Virtualizer-DRLdrPk0.js";import"./chevron-down-DsXyjoP2.js";import"./Button.module-CcWMkJAG.js";import"./useToggleState-BDGTcrOO.js";const $n={component:j,title:"Examples/Form",tags:["autodocs"],argTypes:{}},m={args:{},render:()=>{const t=["Banan","Apple","Mango"];return n.jsxs(G,{children:[n.jsx(e,{size:12,children:n.jsx(r,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),n.jsx(e,{size:12,children:n.jsx(r,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),n.jsx(e,{size:12,children:n.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:t.map(o=>({id:o,name:o}))})}),n.jsx(e,{children:n.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const t=["A","B","C"],o=["Anledning A","Anledning B","Anledning C"];return n.jsx("div",{children:n.jsxs(G,{children:[n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:o.map(i=>n.jsx(b,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(h,{label:"Databas",description:"Välj databas att söka i",children:t.map(i=>n.jsx(k,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Namn",description:""})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Personnummer"})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:t.map(i=>({name:i,id:i}))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Ärendekod"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{children:"Sök"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};var d,l,p;m.parameters={...m.parameters,docs:{...(d=m.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
          <Select label='Vilken är din favoritfrukt' placeholder='Välj en frukt' selectionMode='single' options={ITEMS.map(i => ({
          id: i,
          name: i
        }))} />
        </GridItem>

        <GridItem>
          <Button>Skicka</Button>
        </GridItem>
      </Grid>;
  }
}`,...(p=(l=m.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};var c,x,u;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
            <Select label='Kön' description='Kan lämnas tomt' placeholder='Välj kön' selectionMode='single' options={ITEMS.map(i => ({
            name: i,
            id: i
          }))} />
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
}`,...(u=(x=s.parameters)==null?void 0:x.docs)==null?void 0:u.source}}};const wn=["SimpleForm","TwoColumnForm"];export{m as SimpleForm,s as TwoColumnForm,wn as __namedExportsOrder,$n as default};
