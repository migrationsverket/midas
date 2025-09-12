import{j as n}from"./iframe-B-yof7v0.js";import{$ as j}from"./Form-DqYGmZ-D.js";import{G}from"./Grid-CrICLgkD.js";import{G as e}from"./GridItem-C2ncErYw.js";import{T as r}from"./TextField-yNYhD7Uy.js";import{S as I}from"./Select-D9JpqZpS.js";import{B as a}from"./Button-ehy4r1Na.js";import{R as g,a as b}from"./Radio-KOBx2gB8.js";import{C as h}from"./CheckboxGroup-XcmaPXCa.js";import{C as k}from"./Checkbox-B5N70_Pu.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-1sMYfN8U.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-CZFFyPKf.js";import"./useFocusRing-CNqV6a42.js";import"./index-Da5ifXzY.js";import"./index-DZECVR5q.js";import"./TextFieldBase-DsPlrLfq.js";import"./TextField-JRHMydvs.js";import"./FieldError-DXZ2hSSW.js";import"./Text-BOe6Q3za.js";import"./Text-n_-GmpLJ.js";import"./ListKeyboardDelegate-DL1q2dUL.js";import"./SelectionManager-BcaDdfDg.js";import"./useEvent-DiMtCqNH.js";import"./scrollIntoView-Dsrcj58z.js";import"./FocusScope-BKq0jv7h.js";import"./useDescription-DBJkG7ME.js";import"./useControlledState-3Cmpag-P.js";import"./Group-Cjf7x5RU.js";import"./Input-Xc6mBl4O.js";import"./Hidden-CnqEZwWs.js";import"./Button-NUczIEOP.js";import"./useLabels-ZwL1pcmC.js";import"./useButton-Cy7gHjn7.js";import"./useTextField-7BKcCcNe.js";import"./useField-CEmkhm2Y.js";import"./TextField.module-DjUItNl5.js";import"./Label-CApAb0CS.js";import"./Dialog-DXIBK-Je.js";import"./RSPContexts-D3v0wIJG.js";import"./OverlayArrow-ixcP32zT.js";import"./useResizeObserver-Duy3mP0F.js";import"./Collection-BbpV8Zn9.js";import"./index-BI9ArE0D.js";import"./Separator-DrH9kEGC.js";import"./PressResponder-BUJXWEyZ.js";import"./useLocalizedStringFormatter-BiGDH9Kw.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-CvodOSaS.js";import"./VisuallyHidden-D04aOPfP.js";import"./Dialog-DUn_YP6_.js";import"./useLocalizedStringFormatter-ccPdPVsP.js";import"./x-CwbuPXI5.js";import"./createLucideIcon-BIpQBx_q.js";import"./Heading-D1mGklIq.js";import"./info-D40dga5A.js";import"./Tag-D-gA8ebc.js";import"./ListBox-DcAgC5Ue.js";import"./DragAndDrop-Cxxic3xP.js";import"./inertValue-CMYfxEVG.js";import"./useListState-Do73H1fD.js";import"./useHighlightSelectionDescription-DExUBA2g.js";import"./useUpdateEffect-DTDhC_Vr.js";import"./useHasTabbableChild-CRgeXn_d.js";import"./check-D6HdwoDD.js";import"./ListBoxSection-DA4Ietkh.js";import"./Virtualizer-ApTCxOxg.js";import"./useObserveElement-CIAfciAy.js";import"./chevron-down-DobfbTm-.js";import"./Button.module-DRhvPh0f.js";import"./useToggleState-C56R5k7G.js";const $n={component:j,title:"Examples/Form",tags:["autodocs"],argTypes:{}},m={args:{},render:()=>{const t=["Banan","Apple","Mango"];return n.jsxs(G,{children:[n.jsx(e,{size:12,children:n.jsx(r,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),n.jsx(e,{size:12,children:n.jsx(r,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),n.jsx(e,{size:12,children:n.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:t.map(o=>({id:o,name:o}))})}),n.jsx(e,{children:n.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const t=["A","B","C"],o=["Anledning A","Anledning B","Anledning C"];return n.jsx("div",{children:n.jsxs(G,{children:[n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:o.map(i=>n.jsx(b,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(h,{label:"Databas",description:"Välj databas att söka i",children:t.map(i=>n.jsx(k,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Namn",description:""})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Personnummer"})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:t.map(i=>({name:i,id:i}))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Ärendekod"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{children:"Sök"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};var d,l,p;m.parameters={...m.parameters,docs:{...(d=m.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
