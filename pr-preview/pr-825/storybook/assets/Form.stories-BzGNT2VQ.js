import{j as n}from"./iframe-CrK2b6ve.js";import{$ as j}from"./Form-BzJASh_5.js";import{G}from"./Grid-BW_7Fowe.js";import{G as e}from"./GridItem-uud-i9K9.js";import{T as r}from"./TextField-BV2eZk9u.js";import{S as I}from"./Select-DZEHoOBi.js";import{B as a}from"./Button-DBDj0F-G.js";import{R as g,a as b}from"./Radio-B6xRhDxk.js";import{C as h}from"./CheckboxGroup-BHtlsakf.js";import{C as k}from"./Checkbox-BxkzmOY_.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-C57jUYA9.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-BXKPxrJF.js";import"./useFocusRing-9gyv5uxq.js";import"./index-RSvq9O_x.js";import"./index-nP5KsMz1.js";import"./TextFieldBase-CUD1j0F9.js";import"./TextField-CmiDZzb4.js";import"./FieldError-D1qC_v1j.js";import"./Text-DQdkwLcE.js";import"./Text-BEJWm-Fq.js";import"./ListKeyboardDelegate-JF7bN8-k.js";import"./SelectionManager-B-yPnJ5B.js";import"./useEvent-B8JNatVh.js";import"./scrollIntoView-Dsrcj58z.js";import"./FocusScope-Bw6Pzw_X.js";import"./useDescription-B0nnK_Qq.js";import"./useControlledState-CMz-XQuB.js";import"./Group-BIAjJo_4.js";import"./Input-CZTBwfnx.js";import"./Hidden-DIjXmDyO.js";import"./Button-BspYfzYV.js";import"./useLabels-DvA5TWmw.js";import"./useButton-DgX_ev0L.js";import"./useTextField-Bh-p_sue.js";import"./useField-TbESOrq0.js";import"./TextField.module-DjUItNl5.js";import"./Label-BoqaDxjX.js";import"./Dialog-pcJNIhCB.js";import"./RSPContexts-DO2xi3r6.js";import"./OverlayArrow-ls1DoH7_.js";import"./useResizeObserver-DniQYdmc.js";import"./Collection-YbKRpnzC.js";import"./index-C9KIS0Rt.js";import"./Separator-DCIyrcl2.js";import"./PressResponder-DVoIUSfu.js";import"./useLocalizedStringFormatter-CJKvKI0A.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-CvodOSaS.js";import"./VisuallyHidden-BRK4U8YA.js";import"./Dialog-BSOOELQ-.js";import"./useLocalizedStringFormatter-vgfYpwU5.js";import"./x-lTWz3fUp.js";import"./createLucideIcon-DQYfCYT2.js";import"./Heading-mzP12PvQ.js";import"./info-C-Ogfvqv.js";import"./Tag-6pIBpiaC.js";import"./ListBox-D_IP4Bic.js";import"./DragAndDrop-C2a4QdwZ.js";import"./inertValue-C0mMj3Cc.js";import"./useListState-CQLwuGoL.js";import"./useHighlightSelectionDescription-BE-yj0xv.js";import"./useUpdateEffect-DNgQ9Bfx.js";import"./useHasTabbableChild-mg39UuWT.js";import"./check-B3SaG-Fx.js";import"./ListBoxSection-DtU4gIWf.js";import"./Virtualizer-CVHuPo3c.js";import"./useObserveElement-B11cCCFS.js";import"./chevron-down-lZWUHznv.js";import"./Button.module-DRhvPh0f.js";import"./useToggleState-znhUeezd.js";const $n={component:j,title:"Examples/Form",tags:["autodocs"],argTypes:{}},m={args:{},render:()=>{const t=["Banan","Apple","Mango"];return n.jsxs(G,{children:[n.jsx(e,{size:12,children:n.jsx(r,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),n.jsx(e,{size:12,children:n.jsx(r,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),n.jsx(e,{size:12,children:n.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:t.map(o=>({id:o,name:o}))})}),n.jsx(e,{children:n.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const t=["A","B","C"],o=["Anledning A","Anledning B","Anledning C"];return n.jsx("div",{children:n.jsxs(G,{children:[n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:o.map(i=>n.jsx(b,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(h,{label:"Databas",description:"Välj databas att söka i",children:t.map(i=>n.jsx(k,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Namn",description:""})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Personnummer"})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:t.map(i=>({name:i,id:i}))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Ärendekod"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{children:"Sök"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};var d,l,p;m.parameters={...m.parameters,docs:{...(d=m.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
