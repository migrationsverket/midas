import{j as n}from"./iframe-oSJ7vU37.js";import{$ as j}from"./Form-BehajhDj.js";import{G}from"./Grid-CP51PcSo.js";import{G as e}from"./GridItem-BgBwpTct.js";import{T as r}from"./TextField-DdPVQ4hA.js";import{S as I}from"./Select-kXoBA4t8.js";import{B as a}from"./Button-D9fshfi5.js";import{R as g,a as b}from"./Radio-UFt5YVuc.js";import{C as h}from"./CheckboxGroup-B8MxxDkp.js";import{C as k}from"./Checkbox-DPqmbYlg.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-CNuNn3SH.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-B492Inus.js";import"./useFocusRing-CI3WD0pn.js";import"./index-BioRXBMu.js";import"./index-d0To5jnh.js";import"./TextFieldBase-OfO9xpbK.js";import"./TextField-BLIyYPIv.js";import"./FieldError-XZO3HL4P.js";import"./Text-CTcdFZpr.js";import"./Text-Dquji7iu.js";import"./Input-CaBwY3uc.js";import"./Hidden-BiG14V7g.js";import"./Button--BVoLS35.js";import"./useLabels-BG8W9rtW.js";import"./useButton-BkU7hiN-.js";import"./useTextField-siRrXtg2.js";import"./useControlledState-Cm_RGzvR.js";import"./useField-Cof__ajf.js";import"./TextField.module-D7za08S7.js";import"./Label-CGxP55K8.js";import"./Dialog-B7zzWVkG.js";import"./RSPContexts-CC1CAIDJ.js";import"./OverlayArrow-D7x3eb7f.js";import"./useResizeObserver-BmiWR_Gj.js";import"./Collection-B96s9YlS.js";import"./index-BGG5uEog.js";import"./Separator-DguvPBvw.js";import"./SelectionManager-CdQ4POo0.js";import"./useEvent-Dda1gD14.js";import"./scrollIntoView-Dsrcj58z.js";import"./FocusScope-DZauls47.js";import"./useDescription-CVeeZvIo.js";import"./ListKeyboardDelegate-DXg2lfHS.js";import"./PressResponder-C1uOlfxD.js";import"./useLocalizedStringFormatter-Dez5J0c8.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-CvodOSaS.js";import"./VisuallyHidden-CCXBG_Uy.js";import"./Dialog-DF9OxsxX.js";import"./useLocalizedStringFormatter-DM5-6LLn.js";import"./x-BlpTjnJy.js";import"./createLucideIcon-DTWrnuXa.js";import"./Heading-DWPVSiR6.js";import"./info-B23czr_6.js";import"./Tag-DDq1v328.js";import"./ListBox-DgBwj1iE.js";import"./DragAndDrop-4dNUTGox.js";import"./inertValue-vzw3JwjV.js";import"./useListState-Bgw1jby9.js";import"./useHighlightSelectionDescription-CF4R103z.js";import"./useUpdateEffect-DOhckLcr.js";import"./useHasTabbableChild-pr9bibip.js";import"./check-C8UGO2nc.js";import"./ListBoxSection-B5WBwEZZ.js";import"./Virtualizer-CpAs09zS.js";import"./useObserveElement-DPyxbKTZ.js";import"./chevron-down-BLVjGV2v.js";import"./Button.module-DKVuWS4g.js";import"./Group-DHKml22n.js";import"./useToggleState-ClUz1DJM.js";const $n={component:j,title:"Examples/Form",tags:["autodocs"],argTypes:{}},m={args:{},render:()=>{const t=["Banan","Apple","Mango"];return n.jsxs(G,{children:[n.jsx(e,{size:12,children:n.jsx(r,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),n.jsx(e,{size:12,children:n.jsx(r,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),n.jsx(e,{size:12,children:n.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:t.map(o=>({id:o,name:o}))})}),n.jsx(e,{children:n.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const t=["A","B","C"],o=["Anledning A","Anledning B","Anledning C"];return n.jsx("div",{children:n.jsxs(G,{children:[n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:o.map(i=>n.jsx(b,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(h,{label:"Databas",description:"Välj databas att söka i",children:t.map(i=>n.jsx(k,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Namn",description:""})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Personnummer"})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:t.map(i=>({name:i,id:i}))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Ärendekod"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{children:"Sök"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};var d,l,p;m.parameters={...m.parameters,docs:{...(d=m.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
