import{j as n}from"./iframe-CzbXkuq7.js";import{$ as j}from"./Form-CPaO4k5P.js";import{G}from"./Grid-3I_MSCST.js";import{G as e}from"./GridItem-rzd0hD7C.js";import{T as r}from"./TextField-Cvp1Oupd.js";import{S as I}from"./Select--2N6IFRY.js";import{B as a}from"./Button-toyRbv3u.js";import{R as g,a as b}from"./Radio-V1NsDB5J.js";import{C as h}from"./CheckboxGroup-t8VP57dZ.js";import{C as k}from"./Checkbox-DnrGPS_X.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-qUr-RQsm.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-ClfgdKz6.js";import"./useFocusRing-Cj5z6IV5.js";import"./index-DK6mGcBg.js";import"./index-BG6J1V4i.js";import"./TextFieldBase-Blgtw_oC.js";import"./TextField-DB4x8psi.js";import"./FieldError-BFOTSC1q.js";import"./Text-BXpESF90.js";import"./Text-BC2FHhmX.js";import"./ListKeyboardDelegate-wpwacWan.js";import"./SelectionManager-zrYqbBDH.js";import"./useEvent-DBv9BTci.js";import"./scrollIntoView-Dsrcj58z.js";import"./FocusScope-CGLTwAxY.js";import"./useDescription-D7N4XIAR.js";import"./useControlledState-CnT6Niqh.js";import"./Group-Ctqbr0Uw.js";import"./Input-BKkY-116.js";import"./Hidden-BiznEAJ3.js";import"./Button-Cs6FaWqv.js";import"./useLabels--hj6ea_K.js";import"./useButton-BFllmLVA.js";import"./useTextField-DxkyuUW4.js";import"./useField-CyHuFwme.js";import"./TextField.module-DjUItNl5.js";import"./Label-DWpBSNPS.js";import"./Dialog-D-0TVLVL.js";import"./RSPContexts-CO5ea-hv.js";import"./OverlayArrow-C4niQD6b.js";import"./useResizeObserver-CghKoVlh.js";import"./Collection-BrMgazow.js";import"./index-Bs-ofnCY.js";import"./Separator-_IDBc8Un.js";import"./PressResponder-D1n62gu_.js";import"./useLocalizedStringFormatter-CopeLmvq.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-CvodOSaS.js";import"./VisuallyHidden-CvGfUU-S.js";import"./Dialog-BRFoJ0PJ.js";import"./useLocalizedStringFormatter-B0IEEnmK.js";import"./x-dpZ1u57-.js";import"./createLucideIcon-DbY9saCY.js";import"./Heading-gpEJuhDR.js";import"./info-Dl1GusNn.js";import"./Tag-CEX5u95D.js";import"./ListBox-Bo_pJ0g6.js";import"./DragAndDrop-DCE1dtpC.js";import"./inertValue-DPI1svsk.js";import"./useListState-fW3dHp7M.js";import"./useHighlightSelectionDescription-CqbZgmYg.js";import"./useUpdateEffect-BXbQ4CIe.js";import"./useHasTabbableChild-BOiJ9DzF.js";import"./check-CQQBn-nk.js";import"./ListBoxSection-Btn2doDw.js";import"./Virtualizer-BJNLNh5B.js";import"./useObserveElement-DLKeDELR.js";import"./chevron-down-EbAOS6IX.js";import"./Button.module-DRhvPh0f.js";import"./useToggleState-D167RJDh.js";const $n={component:j,title:"Examples/Form",tags:["autodocs"],argTypes:{}},m={args:{},render:()=>{const t=["Banan","Apple","Mango"];return n.jsxs(G,{children:[n.jsx(e,{size:12,children:n.jsx(r,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),n.jsx(e,{size:12,children:n.jsx(r,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),n.jsx(e,{size:12,children:n.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:t.map(o=>({id:o,name:o}))})}),n.jsx(e,{children:n.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const t=["A","B","C"],o=["Anledning A","Anledning B","Anledning C"];return n.jsx("div",{children:n.jsxs(G,{children:[n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:o.map(i=>n.jsx(b,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(h,{label:"Databas",description:"Välj databas att söka i",children:t.map(i=>n.jsx(k,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Namn",description:""})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Personnummer"})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:t.map(i=>({name:i,id:i}))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Ärendekod"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{children:"Sök"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};var d,l,p;m.parameters={...m.parameters,docs:{...(d=m.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
