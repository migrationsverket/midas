import{j as n}from"./iframe-DesuP6km.js";import{$ as j}from"./Form-D6sn9qjj.js";import{G}from"./Grid-DJtAaBZg.js";import{G as e}from"./GridItem-B2mT3zPz.js";import{T as r}from"./TextField-C2dVflfh.js";import{S as I}from"./Select-CuBW-EYN.js";import{B as a}from"./Button-vHkfp-vl.js";import{R as g,a as b}from"./Radio-CE7i-bjJ.js";import{C as h}from"./CheckboxGroup-T9E0W3Bf.js";import{C as k}from"./Checkbox-DwCNKibq.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-By6QO0qY.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-Cu6F5s6L.js";import"./useFocusRing-W916_-LX.js";import"./index-BocVLyBT.js";import"./index-BMuB0BIx.js";import"./TextFieldBase-CjYN4ONL.js";import"./TextField-DkXPxiwl.js";import"./FieldError-B8R6fomE.js";import"./Text-DBWTwUUE.js";import"./Text-Cmv0I3YK.js";import"./context-EF4DsnaP.js";import"./SelectionManager-DPjYgA8D.js";import"./useEvent-BM4h1coB.js";import"./scrollIntoView-Dsrcj58z.js";import"./FocusScope-pat7hTxQ.js";import"./useDescription-COvNJEyk.js";import"./useControlledState-CVscyt6a.js";import"./Group-DwlGz_j0.js";import"./Input-DOewu7TH.js";import"./Hidden-DNfyX8zr.js";import"./Button-DLP1b58x.js";import"./useLabels-3JGzp0nE.js";import"./useButton-DlJDtYy7.js";import"./useTextField-D0V0wADa.js";import"./useField-DdNdr0sa.js";import"./TextField.module-DjUItNl5.js";import"./Label-BLpYLXnX.js";import"./Dialog-CzPV_RDN.js";import"./RSPContexts-Hw3ZUjod.js";import"./OverlayArrow-Cul2XcpB.js";import"./useResizeObserver-M63s1BS_.js";import"./Collection-CZ_5_TsF.js";import"./index-DK-aNZhp.js";import"./Separator-Du1h1AUB.js";import"./PressResponder-C8RuD-me.js";import"./useLocalizedStringFormatter-CtrESTft.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-CvodOSaS.js";import"./VisuallyHidden-CKk2MSnz.js";import"./useLocalizedStringFormatter-BcT8u-qa.js";import"./x-C_XdU-xI.js";import"./createLucideIcon-BS6tifVw.js";import"./Heading-DALsWGP1.js";import"./info-DykW9ghq.js";import"./Popover-DrTenopO.js";import"./Tag-BJXSpf7P.js";import"./ListBox-BHmhIy0K.js";import"./DragAndDrop-DFzAZXBj.js";import"./inertValue-BQjOfNV8.js";import"./useListState-AEdVwPHN.js";import"./useHighlightSelectionDescription-Br2bWKgb.js";import"./useUpdateEffect-B4d1JZhr.js";import"./useHasTabbableChild-CU_OCqlt.js";import"./check-XQEEOaLY.js";import"./ListBoxSection-BHf4CsXj.js";import"./Virtualizer-DKiI4uQT.js";import"./useObserveElement-Brsry2ig.js";import"./chevron-down-Cr4TciAW.js";import"./Button.module-DRhvPh0f.js";import"./useToggleState-BYm4nIMa.js";const $n={component:j,title:"Examples/Form",tags:["autodocs"],argTypes:{}},m={args:{},render:()=>{const t=["Banan","Apple","Mango"];return n.jsxs(G,{children:[n.jsx(e,{size:12,children:n.jsx(r,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),n.jsx(e,{size:12,children:n.jsx(r,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),n.jsx(e,{size:12,children:n.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:t.map(o=>({id:o,name:o}))})}),n.jsx(e,{children:n.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const t=["A","B","C"],o=["Anledning A","Anledning B","Anledning C"];return n.jsx("div",{children:n.jsxs(G,{children:[n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:o.map(i=>n.jsx(b,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(h,{label:"Databas",description:"Välj databas att söka i",children:t.map(i=>n.jsx(k,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Namn",description:""})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Personnummer"})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:t.map(i=>({name:i,id:i}))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Ärendekod"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{children:"Sök"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};var d,l,p;m.parameters={...m.parameters,docs:{...(d=m.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
