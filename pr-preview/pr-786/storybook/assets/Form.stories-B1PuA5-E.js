import{j as n}from"./iframe-CMrdGcpV.js";import{$ as j}from"./Form-oXFi-IJn.js";import{G}from"./Grid-CLxEYoNK.js";import{G as e}from"./GridItem-DfKXklK1.js";import{T as r}from"./TextField-SRpno-Ko.js";import{S as I}from"./Select-CbrAkYn5.js";import{B as a}from"./Button-BFwd0WEW.js";import{R as g,a as b}from"./Radio-DAMLVRag.js";import{C as h}from"./CheckboxGroup-Bt5qtuFF.js";import{C as k}from"./Checkbox-Cab1xpsW.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-DnExCjfw.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-DVn6ANJm.js";import"./useFocusRing-DiCZjOhQ.js";import"./index-BCyO9uYu.js";import"./index-jsZTaXrx.js";import"./TextFieldBase-1Fqnk1rR.js";import"./TextField-B4hixjil.js";import"./FieldError-BcKJVLHs.js";import"./Text-Dpd2WXB7.js";import"./Text-C_eM9CXL.js";import"./ListKeyboardDelegate-DUITzGXb.js";import"./SelectionManager-qiqireWI.js";import"./useEvent-Dzb_Je_p.js";import"./scrollIntoView-Dsrcj58z.js";import"./FocusScope-CKS4xpiN.js";import"./useDescription-Dpf2PkGG.js";import"./useControlledState-K8TgW5Uq.js";import"./Group-CwGHDZ4R.js";import"./Input-DnCz49J4.js";import"./Hidden-B50sXY4T.js";import"./Button-DTA015GD.js";import"./useLabels-D2KDV_ZR.js";import"./useButton-IJbAZOCe.js";import"./useTextField-BqvxgOrs.js";import"./useField-D36GmWtQ.js";import"./TextField.module-8oYDuXgF.js";import"./Label-fqfiDXAw.js";import"./Dialog-D5M3BlWn.js";import"./RSPContexts-DqdLCvLq.js";import"./OverlayArrow-DaaFfCu2.js";import"./useResizeObserver-BR1k7xqn.js";import"./Collection-Oh2eTBOn.js";import"./index-DxcNOOW2.js";import"./Separator-DvKK5Jvg.js";import"./PressResponder-NST5xJHF.js";import"./useLocalizedStringFormatter-CAd2T90X.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-CvodOSaS.js";import"./VisuallyHidden-BUnd2uRW.js";import"./Dialog-Dmdow7ES.js";import"./useLocalizedStringFormatter-BT2n58im.js";import"./x-QuYFyK5A.js";import"./createLucideIcon-B-7ATGuZ.js";import"./Heading-DVrmaVbr.js";import"./info-Bo_U0-H6.js";import"./Tag-5rAi3aTB.js";import"./ListBox-CpE-EnCv.js";import"./DragAndDrop-DOMqb8r5.js";import"./inertValue-2SkFZHjg.js";import"./useListState-3Km1JsVe.js";import"./useHighlightSelectionDescription-BMet6Fyt.js";import"./useUpdateEffect-uvrOFbfH.js";import"./useHasTabbableChild-omxDo9Dk.js";import"./check-BamnrInS.js";import"./ListBoxSection-U16gAccZ.js";import"./Virtualizer-DYICJlZ0.js";import"./useObserveElement-DjYADpA0.js";import"./chevron-down-CYsJetWJ.js";import"./Button.module-BkTnSRp5.js";import"./useToggleState-fLqO6aGq.js";const $n={component:j,title:"Examples/Form",tags:["autodocs"],argTypes:{}},m={args:{},render:()=>{const t=["Banan","Apple","Mango"];return n.jsxs(G,{children:[n.jsx(e,{size:12,children:n.jsx(r,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),n.jsx(e,{size:12,children:n.jsx(r,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),n.jsx(e,{size:12,children:n.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:t.map(o=>({id:o,name:o}))})}),n.jsx(e,{children:n.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const t=["A","B","C"],o=["Anledning A","Anledning B","Anledning C"];return n.jsx("div",{children:n.jsxs(G,{children:[n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:o.map(i=>n.jsx(b,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(h,{label:"Databas",description:"Välj databas att söka i",children:t.map(i=>n.jsx(k,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Namn",description:""})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Personnummer"})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:t.map(i=>({name:i,id:i}))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Ärendekod"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{children:"Sök"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};var d,l,p;m.parameters={...m.parameters,docs:{...(d=m.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
