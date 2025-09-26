import{j as n}from"./iframe-Ctlnl2U4.js";import{$ as j}from"./Form-DpOAcAcQ.js";import{G}from"./Grid-CqD69iJo.js";import{G as e}from"./GridItem-CZHi8tKG.js";import{T as r}from"./TextField-uh7pTGP0.js";import{S as I}from"./Select-Cl5dHU9V.js";import{B as a}from"./Button-_LeWbovD.js";import{R as g,a as b}from"./Radio-BzcJka_7.js";import{C as h}from"./CheckboxGroup-BAz-_3U3.js";import{C as k}from"./Checkbox-EIhmCY84.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-Df_uxVPo.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-ByHXVipE.js";import"./useFocusRing-CkS0CgUq.js";import"./index-CQ6owihx.js";import"./index-CuW6jeY2.js";import"./TextFieldBase-_vxjqPkb.js";import"./TextField-Csco7SsR.js";import"./FieldError-DQAoH_2H.js";import"./Text-BXw3PgyD.js";import"./Text-SGAcdHBj.js";import"./ListKeyboardDelegate-CappHKFK.js";import"./SelectionManager-CCMVQ8bK.js";import"./useEvent-okXs_g17.js";import"./scrollIntoView-Dsrcj58z.js";import"./FocusScope-vM3OiYou.js";import"./useDescription-CXIWcgpk.js";import"./useControlledState-D2WHtDz6.js";import"./Group-DaK5668B.js";import"./Input-c9GTYbjf.js";import"./Hidden-xe784bgM.js";import"./Button-OSHpO4G0.js";import"./useLabels-Cs890SJ1.js";import"./useButton-DKFyYeyo.js";import"./useTextField-CqwjXs0T.js";import"./useField-B1WHteUm.js";import"./TextField.module-DjUItNl5.js";import"./Label-DxB0TRtZ.js";import"./Dialog-D3Ia5r7R.js";import"./RSPContexts-B7hu6t0z.js";import"./OverlayArrow-Dcpznnav.js";import"./useResizeObserver-CsXHbAIj.js";import"./Collection-DKjVpu_T.js";import"./index-CBaB2MnM.js";import"./Separator-56VnvZlf.js";import"./PressResponder-CJmL0dWL.js";import"./useLocalizedStringFormatter-D81Fj72G.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-CvodOSaS.js";import"./VisuallyHidden-DdCl1QPD.js";import"./Dialog-WJeuA-Ak.js";import"./useLocalizedStringFormatter-DdD-q0PU.js";import"./x-D-IR22X-.js";import"./createLucideIcon-DxOaowFd.js";import"./Heading-BL8J2MxT.js";import"./info-D7KJKqdZ.js";import"./Tag-CN8I48J7.js";import"./ListBox-7BLooPEp.js";import"./DragAndDrop-DRGx73mb.js";import"./inertValue-Cdpq28ZY.js";import"./useListState-CbDNMZ0A.js";import"./useHighlightSelectionDescription-DcMBZpNN.js";import"./useUpdateEffect-DkyC61Cg.js";import"./useHasTabbableChild-Bq7yHSuE.js";import"./check-wSwfr9gT.js";import"./ListBoxSection-DRqckpw0.js";import"./Virtualizer-BDgqqsmZ.js";import"./useObserveElement-C-XIJVG2.js";import"./chevron-down-BO9mHpih.js";import"./Button.module-DRhvPh0f.js";import"./useToggleState-iC9HOVBa.js";const $n={component:j,title:"Examples/Form",tags:["autodocs"],argTypes:{}},m={args:{},render:()=>{const t=["Banan","Apple","Mango"];return n.jsxs(G,{children:[n.jsx(e,{size:12,children:n.jsx(r,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),n.jsx(e,{size:12,children:n.jsx(r,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),n.jsx(e,{size:12,children:n.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:t.map(o=>({id:o,name:o}))})}),n.jsx(e,{children:n.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const t=["A","B","C"],o=["Anledning A","Anledning B","Anledning C"];return n.jsx("div",{children:n.jsxs(G,{children:[n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:o.map(i=>n.jsx(b,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(h,{label:"Databas",description:"Välj databas att söka i",children:t.map(i=>n.jsx(k,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Namn",description:""})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Personnummer"})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:t.map(i=>({name:i,id:i}))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Ärendekod"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{children:"Sök"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};var d,l,p;m.parameters={...m.parameters,docs:{...(d=m.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
