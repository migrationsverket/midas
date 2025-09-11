import{j as n}from"./iframe-DRZdUIJs.js";import{$ as j}from"./Form-C8SIpW6x.js";import{G}from"./Grid-CbjHzj8m.js";import{G as e}from"./GridItem-anx2YIDr.js";import{T as r}from"./TextField-vAiscngc.js";import{S as I}from"./Select-BOK5DEfz.js";import{B as a}from"./Button-BU0d3cnH.js";import{R as g,a as b}from"./Radio-CS38Otp-.js";import{C as h}from"./CheckboxGroup-CKIPMNec.js";import{C as k}from"./Checkbox-CEw216zK.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-CKK3UDgr.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-BmUwPBJA.js";import"./useFocusRing-Hsify7_X.js";import"./index-CbBEFnPv.js";import"./index-BtzDifcb.js";import"./TextFieldBase-DebrSSh0.js";import"./TextField-Dc5jNmlG.js";import"./FieldError-CtMu0nrD.js";import"./Text--dAePbsz.js";import"./Text-BQyKd7Bj.js";import"./ListKeyboardDelegate-Dw44kFR0.js";import"./SelectionManager-DamX-YTE.js";import"./useEvent-7J7lBuYS.js";import"./scrollIntoView-Dsrcj58z.js";import"./FocusScope-C0EJLdj3.js";import"./useDescription-DpXKBDaJ.js";import"./useControlledState-Anq9cKeh.js";import"./Group-iPBHetnm.js";import"./Input-BymkN1go.js";import"./Hidden-QAoTiEsM.js";import"./Button-DIBMlKDy.js";import"./useLabels-CffQ9XD5.js";import"./useButton-y4Wb2qRj.js";import"./useTextField-D4kQVAr8.js";import"./useField-B0wBiE9l.js";import"./TextField.module-DjUItNl5.js";import"./Label-C9Tw4CxK.js";import"./Dialog-BNZlSzb-.js";import"./RSPContexts-DpQSmc7I.js";import"./OverlayArrow-CCuQfigz.js";import"./useResizeObserver-DpVY46CZ.js";import"./Collection-DngcUsHy.js";import"./index-B_uzEBfw.js";import"./Separator-BIHWamwv.js";import"./PressResponder-BarudaES.js";import"./useLocalizedStringFormatter-5UJ-e-Hg.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-CvodOSaS.js";import"./VisuallyHidden-CXFQFsNC.js";import"./Dialog-DRXe-vwZ.js";import"./useLocalizedStringFormatter-8lsqOXsg.js";import"./x-C1FYIfKJ.js";import"./createLucideIcon-CYCCyUv-.js";import"./Heading-BwRBhzzF.js";import"./info-CCnFiaHG.js";import"./Tag-C8t6EW1U.js";import"./ListBox-DBnIOd2X.js";import"./DragAndDrop-B-zf_jpp.js";import"./inertValue-D9FsPl-4.js";import"./useListState-Bn-N4gBG.js";import"./useHighlightSelectionDescription-B-PhqH1P.js";import"./useUpdateEffect-BNs3Qt-X.js";import"./useHasTabbableChild-D72LynxG.js";import"./check-DkSGPTWQ.js";import"./ListBoxSection-LVXsxp2G.js";import"./Virtualizer-f-FVCXF5.js";import"./useObserveElement-BmGYOxsQ.js";import"./chevron-down-1XU65LET.js";import"./Button.module-K7qYOset.js";import"./useToggleState-Df-91v-j.js";const $n={component:j,title:"Examples/Form",tags:["autodocs"],argTypes:{}},m={args:{},render:()=>{const t=["Banan","Apple","Mango"];return n.jsxs(G,{children:[n.jsx(e,{size:12,children:n.jsx(r,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),n.jsx(e,{size:12,children:n.jsx(r,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),n.jsx(e,{size:12,children:n.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:t.map(o=>({id:o,name:o}))})}),n.jsx(e,{children:n.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const t=["A","B","C"],o=["Anledning A","Anledning B","Anledning C"];return n.jsx("div",{children:n.jsxs(G,{children:[n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:o.map(i=>n.jsx(b,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(h,{label:"Databas",description:"Välj databas att söka i",children:t.map(i=>n.jsx(k,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Namn",description:""})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Personnummer"})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:t.map(i=>({name:i,id:i}))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Ärendekod"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{children:"Sök"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};var d,l,p;m.parameters={...m.parameters,docs:{...(d=m.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
