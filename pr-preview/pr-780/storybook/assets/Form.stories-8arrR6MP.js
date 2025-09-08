import{j as n}from"./iframe-Dpysv7zU.js";import{$ as j}from"./Form-DlfOmZsV.js";import{G}from"./Grid-BWfgDqeF.js";import{G as e}from"./GridItem-CnJo0l6_.js";import{T as r}from"./TextField-1KZgosCv.js";import{S as I}from"./Select-s3dzrPhn.js";import{B as a}from"./Button-BB_u7uMr.js";import{R as g,a as b}from"./Radio-ChIJ8Qg1.js";import{C as h}from"./CheckboxGroup-BAPlsAWE.js";import{C as k}from"./Checkbox-B1Realks.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-BA4Y8MsR.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-C1cGG2TC.js";import"./useFocusRing-DvhAZrYJ.js";import"./index-nlWof-mv.js";import"./index-x-TDUpv8.js";import"./TextFieldBase-Jop2QK4S.js";import"./TextField-ChUeveNG.js";import"./FieldError-BZmR2KS3.js";import"./Text-DkOT-iM2.js";import"./Text-CSTqf-pg.js";import"./ListKeyboardDelegate-CDBrYe3F.js";import"./SelectionManager-TgCzq92U.js";import"./useEvent-Btya3dwt.js";import"./scrollIntoView-Dsrcj58z.js";import"./FocusScope-CSFG_V_8.js";import"./useDescription-BLCxsATh.js";import"./useControlledState-Dxn4OSEe.js";import"./Group-501Qq3U9.js";import"./Input-CPlLZHOl.js";import"./Hidden-CD8l8fCV.js";import"./Button-BLHsRTSn.js";import"./useLabels-Ct51tc1V.js";import"./useButton-qpRSVaqA.js";import"./useTextField-n7JTDPWJ.js";import"./useField-I9NSWaMQ.js";import"./TextField.module-CBRvGQ7k.js";import"./Label-Baxkju76.js";import"./Dialog-BkjhTTCC.js";import"./RSPContexts-DGqAZPbv.js";import"./OverlayArrow-BQYateuR.js";import"./useResizeObserver-Xhnc4F6h.js";import"./Collection-DXv9diBy.js";import"./index-D8l3Rlnm.js";import"./Separator-Bz0gTZvq.js";import"./PressResponder-C0pugKP5.js";import"./useLocalizedStringFormatter-DiW83o7m.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-CvodOSaS.js";import"./VisuallyHidden-DR0cahii.js";import"./Dialog-BQ58geXk.js";import"./useLocalizedStringFormatter-BFxPUffP.js";import"./x-CUWp03vs.js";import"./createLucideIcon-DIDOhsTn.js";import"./Heading-BFZDeWyc.js";import"./info-BHyKoThp.js";import"./Tag-B_c444H1.js";import"./ListBox-Ddn5maMu.js";import"./DragAndDrop--Zvosfj4.js";import"./inertValue-BNvTjws1.js";import"./useListState-DNop7la8.js";import"./useHighlightSelectionDescription-D46xcg8h.js";import"./useUpdateEffect-1VEsarD8.js";import"./useHasTabbableChild-H_ZkdCRI.js";import"./check-yphfG_b1.js";import"./ListBoxSection-DsxH9XSH.js";import"./Virtualizer-D74w0wrm.js";import"./useObserveElement-BYXJ_BNE.js";import"./chevron-down-Dx7Dstyg.js";import"./Button.module-DgYkWG2o.js";import"./useToggleState-B1qzycde.js";const $n={component:j,title:"Examples/Form",tags:["autodocs"],argTypes:{}},m={args:{},render:()=>{const t=["Banan","Apple","Mango"];return n.jsxs(G,{children:[n.jsx(e,{size:12,children:n.jsx(r,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),n.jsx(e,{size:12,children:n.jsx(r,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),n.jsx(e,{size:12,children:n.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:t.map(o=>({id:o,name:o}))})}),n.jsx(e,{children:n.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const t=["A","B","C"],o=["Anledning A","Anledning B","Anledning C"];return n.jsx("div",{children:n.jsxs(G,{children:[n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:o.map(i=>n.jsx(b,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(h,{label:"Databas",description:"Välj databas att söka i",children:t.map(i=>n.jsx(k,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Namn",description:""})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Personnummer"})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:t.map(i=>({name:i,id:i}))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Ärendekod"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{children:"Sök"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};var d,l,p;m.parameters={...m.parameters,docs:{...(d=m.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
