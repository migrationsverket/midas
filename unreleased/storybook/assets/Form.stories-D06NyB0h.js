import{j as n}from"./iframe-BSYflkMp.js";import{$ as j}from"./Form-DHCj33u-.js";import{G}from"./Grid-CnvIquoq.js";import{G as e}from"./GridItem-pjYQI5tn.js";import{T as r}from"./TextField-DEZVDVFr.js";import{S as I}from"./Select-CLtLEvCS.js";import{B as a}from"./Button-BbwHCXMd.js";import{R as g,a as b}from"./Radio-Dtrk_Ktz.js";import{C as h}from"./CheckboxGroup-BWnvIxlS.js";import{C as k}from"./Checkbox-BAvMNB2H.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-Tu0jnTpK.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-BeqAQzJr.js";import"./useFocusRing-DptWTHJr.js";import"./index-BKwso5YW.js";import"./index-DmA7bfqn.js";import"./TextFieldBase-COBCZnxZ.js";import"./TextField-BUcVBzNm.js";import"./FieldError-DxjOMk2n.js";import"./Text-DYAkFKh8.js";import"./Text-DAvemimc.js";import"./ListKeyboardDelegate-CCfdQiNC.js";import"./SelectionManager-C3iFvNmU.js";import"./useEvent-yR7Sx4tS.js";import"./scrollIntoView-Dsrcj58z.js";import"./FocusScope-DyQmzAvi.js";import"./useDescription-CzALybbT.js";import"./useControlledState-UbtOJD7b.js";import"./Group-C0cKT2hw.js";import"./Input-Bp4uzVYT.js";import"./Hidden-afdHDBh7.js";import"./Button-DE-P2LI3.js";import"./useLabels-CC4dxl-U.js";import"./useButton-rzu78a1E.js";import"./useTextField-C5Ea3d-N.js";import"./useField-RmZ9cner.js";import"./TextField.module-DjUItNl5.js";import"./Label-ktPEchRj.js";import"./Dialog-DzulnZ-a.js";import"./RSPContexts-BHneX46K.js";import"./OverlayArrow-DmsrzhxB.js";import"./useResizeObserver-BmQGHreb.js";import"./Collection-TNz6mTgR.js";import"./index-YG_FKGJN.js";import"./Separator-BQJXi4R2.js";import"./PressResponder-DYssmajX.js";import"./useLocalizedStringFormatter-Bw8UTcVd.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-CvodOSaS.js";import"./VisuallyHidden-D506Ucgk.js";import"./Dialog-CTJdFt2W.js";import"./useLocalizedStringFormatter-CF48ne55.js";import"./x-C2sIw717.js";import"./createLucideIcon-Bm2PhNVP.js";import"./Heading-CKp4palB.js";import"./info-B5hnd-V1.js";import"./Tag-qi725Ia0.js";import"./ListBox-By10vm-s.js";import"./DragAndDrop-C2m8LcCD.js";import"./inertValue-hWInyTVi.js";import"./useListState-SEwT6kch.js";import"./useHighlightSelectionDescription-CNyw0SqZ.js";import"./useUpdateEffect--JVR9SnP.js";import"./useHasTabbableChild-C9yJ-AKZ.js";import"./check-BsRHjmBD.js";import"./ListBoxSection-Cc91Peno.js";import"./Virtualizer-BySu_EeY.js";import"./useObserveElement-CIo1SJAz.js";import"./chevron-down-CRDRmso4.js";import"./Button.module-DRhvPh0f.js";import"./useToggleState-DnrJxRLJ.js";const $n={component:j,title:"Examples/Form",tags:["autodocs"],argTypes:{}},m={args:{},render:()=>{const t=["Banan","Apple","Mango"];return n.jsxs(G,{children:[n.jsx(e,{size:12,children:n.jsx(r,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),n.jsx(e,{size:12,children:n.jsx(r,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),n.jsx(e,{size:12,children:n.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:t.map(o=>({id:o,name:o}))})}),n.jsx(e,{children:n.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const t=["A","B","C"],o=["Anledning A","Anledning B","Anledning C"];return n.jsx("div",{children:n.jsxs(G,{children:[n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:o.map(i=>n.jsx(b,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(h,{label:"Databas",description:"Välj databas att söka i",children:t.map(i=>n.jsx(k,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Namn",description:""})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Personnummer"})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:t.map(i=>({name:i,id:i}))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Ärendekod"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{children:"Sök"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};var d,l,p;m.parameters={...m.parameters,docs:{...(d=m.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
