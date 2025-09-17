import{j as n}from"./iframe-CBLyp6Df.js";import{$ as j}from"./Form-BTZ1xqPf.js";import{G}from"./Grid-B5133rKd.js";import{G as e}from"./GridItem-DfK-tXyA.js";import{T as r}from"./TextField-CT91BO0G.js";import{S as I}from"./Select-CoRwqq7g.js";import{B as a}from"./Button-ByLLZfj5.js";import{R as g,a as b}from"./Radio-C9bQ7OcP.js";import{C as h}from"./CheckboxGroup-C1fhsMKc.js";import{C as k}from"./Checkbox-xPyuTYaT.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-CZnmoRnZ.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-Cr8awCRg.js";import"./useFocusRing-Ba5BIRHo.js";import"./index-BeMsLq_7.js";import"./index-XngMirVr.js";import"./TextFieldBase-Cj6WJ7_A.js";import"./TextField-k1DJL-Am.js";import"./FieldError-D5g2uMKR.js";import"./Text-Bktl3WMK.js";import"./Text-CUyyagbX.js";import"./ListKeyboardDelegate-vzPGcoA_.js";import"./SelectionManager-Bc7SFXXY.js";import"./useEvent-BRoPDqrk.js";import"./scrollIntoView-Dsrcj58z.js";import"./FocusScope-DacESX7A.js";import"./useDescription-DTdpx1Ui.js";import"./useControlledState-nq6MpzIR.js";import"./Group-DxoGsPUY.js";import"./Input-LPr_8njN.js";import"./Hidden-Cgex3EGe.js";import"./Button-DNy0we5g.js";import"./useLabels-xFBToVlf.js";import"./useButton-BYvOX5r7.js";import"./useTextField-CjF3iVDh.js";import"./useField-eBg2yBGQ.js";import"./TextField.module-DjUItNl5.js";import"./Label-Cf2vX6Q1.js";import"./Dialog-vZYT3dFt.js";import"./RSPContexts-BKpvtiNX.js";import"./OverlayArrow-DAW5M31i.js";import"./useResizeObserver-CpR8cXp-.js";import"./Collection-BUz76WAB.js";import"./index-DBpYSZP5.js";import"./Separator-BBqb7WaU.js";import"./PressResponder-CBHfTFw1.js";import"./useLocalizedStringFormatter-uOnQJl0p.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-CvodOSaS.js";import"./VisuallyHidden-DC3L4Mu-.js";import"./Dialog-C3uOT_wP.js";import"./useLocalizedStringFormatter-B2DrQmfi.js";import"./x-CYzNJqF_.js";import"./createLucideIcon-pVx8Uva1.js";import"./Heading-CG9ZhE5y.js";import"./info-Bb_NIz79.js";import"./Tag-CxjAq0dd.js";import"./ListBox-B-_XnFuZ.js";import"./DragAndDrop-D-cgf1vQ.js";import"./inertValue-Ba9DdO6W.js";import"./useListState-BkKCuV-m.js";import"./useHighlightSelectionDescription-Bf4Vkv5g.js";import"./useUpdateEffect-FcmjDvQB.js";import"./useHasTabbableChild-DzAZ0ruI.js";import"./check-oDgC6FB1.js";import"./ListBoxSection-BGne21_t.js";import"./Virtualizer-CyveV-nd.js";import"./useObserveElement-CJfzpTCB.js";import"./chevron-down-BnoIQkRv.js";import"./Button.module-DRhvPh0f.js";import"./useToggleState-BUsez5Y1.js";const $n={component:j,title:"Examples/Form",tags:["autodocs"],argTypes:{}},m={args:{},render:()=>{const t=["Banan","Apple","Mango"];return n.jsxs(G,{children:[n.jsx(e,{size:12,children:n.jsx(r,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),n.jsx(e,{size:12,children:n.jsx(r,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),n.jsx(e,{size:12,children:n.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:t.map(o=>({id:o,name:o}))})}),n.jsx(e,{children:n.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const t=["A","B","C"],o=["Anledning A","Anledning B","Anledning C"];return n.jsx("div",{children:n.jsxs(G,{children:[n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:o.map(i=>n.jsx(b,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(h,{label:"Databas",description:"Välj databas att söka i",children:t.map(i=>n.jsx(k,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Namn",description:""})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Personnummer"})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:t.map(i=>({name:i,id:i}))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Ärendekod"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{children:"Sök"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};var d,l,p;m.parameters={...m.parameters,docs:{...(d=m.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
