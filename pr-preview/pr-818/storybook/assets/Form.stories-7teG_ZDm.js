import{j as n}from"./iframe-DjOPeWRO.js";import{$ as j}from"./Form-DcaKM2wr.js";import{G}from"./Grid-DgxdCuA0.js";import{G as e}from"./GridItem-BBWMbo4X.js";import{T as r}from"./TextField-j9mSyi1u.js";import{S as I}from"./Select-B0ItE31I.js";import{B as a}from"./Button-DqsVmyp5.js";import{R as g,a as b}from"./Radio-BMpTnIyV.js";import{C as h}from"./CheckboxGroup-COBvPD2Z.js";import{C as k}from"./Checkbox-C6YKxteo.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-CLHggnle.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-CM1jPTDn.js";import"./useFocusRing-Y0u9c485.js";import"./index-diKK7A6y.js";import"./index-D-mOB6zQ.js";import"./TextFieldBase-CKCNAuaR.js";import"./TextField-BAYeldAW.js";import"./FieldError-l8Eivors.js";import"./Text-CKidCZAq.js";import"./Text-yPg0W-sM.js";import"./ListKeyboardDelegate-CmXWW-mn.js";import"./SelectionManager-DOsKIuJX.js";import"./useEvent-DEhbIWCb.js";import"./scrollIntoView-Dsrcj58z.js";import"./FocusScope-DzGsda8s.js";import"./useDescription-B04Mcv1z.js";import"./useControlledState-BDclS-sV.js";import"./Group-rFTaa1QS.js";import"./Input-BtVNQi6P.js";import"./Hidden-CHL2y8Ry.js";import"./Button-BEn25HMG.js";import"./useLabels-DcggZ_L3.js";import"./useButton-CX96_4oF.js";import"./useTextField-DMwtkxBp.js";import"./useField-xuFYj_Hs.js";import"./TextField.module-DjUItNl5.js";import"./Label-Bx13Y_at.js";import"./Dialog-C9IFj3En.js";import"./RSPContexts-HB5FKaGR.js";import"./OverlayArrow-ydhALOnY.js";import"./useResizeObserver-2ur_9Moc.js";import"./Collection-DT_Q6zsV.js";import"./index-TbSdduEp.js";import"./Separator-B8HVAKeg.js";import"./PressResponder-itmGqSXk.js";import"./useLocalizedStringFormatter-CUrlHmMS.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-CvodOSaS.js";import"./VisuallyHidden-1qYLia3H.js";import"./Dialog-E5Y0Rxry.js";import"./useLocalizedStringFormatter-B8zfmz1L.js";import"./x-CAckjysE.js";import"./createLucideIcon-DqvONbIX.js";import"./Heading-D3NCmuL4.js";import"./info-BTQHqqHL.js";import"./Tag-BZdTyjIQ.js";import"./ListBox-CXXEz5AR.js";import"./DragAndDrop-DAeNAX5Q.js";import"./inertValue-BS9orNTB.js";import"./useListState-CV747zvI.js";import"./useHighlightSelectionDescription-CZVuQbRN.js";import"./useUpdateEffect-DllzfqbR.js";import"./useHasTabbableChild-BEhZ0LOa.js";import"./check-ChxMMWGt.js";import"./ListBoxSection-BbjkIMsw.js";import"./Virtualizer-1_GOeSC_.js";import"./useObserveElement-DMGkIb9R.js";import"./chevron-down-DsnmQiER.js";import"./Button.module-DRhvPh0f.js";import"./useToggleState-DoMVXa84.js";const $n={component:j,title:"Examples/Form",tags:["autodocs"],argTypes:{}},m={args:{},render:()=>{const t=["Banan","Apple","Mango"];return n.jsxs(G,{children:[n.jsx(e,{size:12,children:n.jsx(r,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),n.jsx(e,{size:12,children:n.jsx(r,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),n.jsx(e,{size:12,children:n.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:t.map(o=>({id:o,name:o}))})}),n.jsx(e,{children:n.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const t=["A","B","C"],o=["Anledning A","Anledning B","Anledning C"];return n.jsx("div",{children:n.jsxs(G,{children:[n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:o.map(i=>n.jsx(b,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(h,{label:"Databas",description:"Välj databas att söka i",children:t.map(i=>n.jsx(k,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Namn",description:""})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Personnummer"})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:t.map(i=>({name:i,id:i}))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Ärendekod"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{children:"Sök"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};var d,l,p;m.parameters={...m.parameters,docs:{...(d=m.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
