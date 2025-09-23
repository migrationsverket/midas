import{j as n}from"./iframe-CZMU-d-C.js";import{$ as j}from"./Form-Bo5WJGJo.js";import{G}from"./Grid-ArVXAU7z.js";import{G as e}from"./GridItem-CDsa5Uqe.js";import{T as r}from"./TextField-5vfqVlj2.js";import{S as I}from"./Select-C_oUs7UH.js";import{B as a}from"./Button-AFygZI4L.js";import{R as g,a as b}from"./Radio-BORZLqlu.js";import{C as h}from"./CheckboxGroup-DnPC6Qks.js";import{C as k}from"./Checkbox-oairU9AT.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-0vyF8Uvf.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-Dutb7GHy.js";import"./useFocusRing-BkGUeev8.js";import"./index-mt08pHjx.js";import"./index-DhUuosiI.js";import"./TextFieldBase-DhvLVdXZ.js";import"./TextField-CtHJg1o6.js";import"./FieldError-BIINFkpB.js";import"./Text-Ba3maOKa.js";import"./Text-CB6yyvUs.js";import"./ListKeyboardDelegate-b5wy3bwX.js";import"./SelectionManager-DDNa3TB0.js";import"./useEvent-DXSKo_g7.js";import"./scrollIntoView-Dsrcj58z.js";import"./FocusScope-DVrxh941.js";import"./useDescription-DV1bc_WG.js";import"./useControlledState-B_XrwgYS.js";import"./Group-C_T1EK1S.js";import"./Input-BLiHK7Cf.js";import"./Hidden-CcxOsUjT.js";import"./Button-CQJI0lPe.js";import"./useLabels-BQR7hWQl.js";import"./useButton-CT0O94HX.js";import"./useTextField-BQ9s12-0.js";import"./useField-QjPQ163I.js";import"./TextField.module-DjUItNl5.js";import"./Label-BEg8xDSd.js";import"./Dialog-CRFsKO3P.js";import"./RSPContexts-sK0rTG-Z.js";import"./OverlayArrow-BbO4zd4t.js";import"./useResizeObserver-DwGilCLn.js";import"./Collection-D9DWt1a5.js";import"./index-Cu5btwEW.js";import"./Separator-B6ts5dTN.js";import"./PressResponder-BGsTQ9_Z.js";import"./useLocalizedStringFormatter-UHruE0Wp.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-CvodOSaS.js";import"./VisuallyHidden-oPYX8kld.js";import"./Dialog-B9t_hShX.js";import"./useLocalizedStringFormatter-Bly3LikA.js";import"./x-CsrDwsrq.js";import"./createLucideIcon-BJGWvH8U.js";import"./Heading-BqlBOzu_.js";import"./info-CTPnXPLb.js";import"./Tag-B3FfFwez.js";import"./ListBox-CzFj1Kye.js";import"./DragAndDrop-COruk8Lw.js";import"./inertValue-C-TZhPzi.js";import"./useListState-DvWGjoux.js";import"./useHighlightSelectionDescription-BL3ZOYs-.js";import"./useUpdateEffect-C72DcCNI.js";import"./useHasTabbableChild-DktMDPoh.js";import"./check-DKg2FWaN.js";import"./ListBoxSection-sz_vR3ms.js";import"./Virtualizer-DS0wPe_8.js";import"./useObserveElement-CLwmm-V0.js";import"./chevron-down-DINN5DVU.js";import"./Button.module-DRhvPh0f.js";import"./useToggleState-DgfjJovX.js";const $n={component:j,title:"Examples/Form",tags:["autodocs"],argTypes:{}},m={args:{},render:()=>{const t=["Banan","Apple","Mango"];return n.jsxs(G,{children:[n.jsx(e,{size:12,children:n.jsx(r,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),n.jsx(e,{size:12,children:n.jsx(r,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),n.jsx(e,{size:12,children:n.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:t.map(o=>({id:o,name:o}))})}),n.jsx(e,{children:n.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const t=["A","B","C"],o=["Anledning A","Anledning B","Anledning C"];return n.jsx("div",{children:n.jsxs(G,{children:[n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:o.map(i=>n.jsx(b,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(h,{label:"Databas",description:"Välj databas att söka i",children:t.map(i=>n.jsx(k,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Namn",description:""})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Personnummer"})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:t.map(i=>({name:i,id:i}))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Ärendekod"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{children:"Sök"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};var d,l,p;m.parameters={...m.parameters,docs:{...(d=m.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
