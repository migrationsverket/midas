import{j as n}from"./iframe-CN_yL12w.js";import{$ as j}from"./Form-f9lbAkiV.js";import{G}from"./Grid-_gPUaM1E.js";import{G as e}from"./GridItem-D50RH-hD.js";import{T as r}from"./TextField-BNwU-ntb.js";import{S as I}from"./Select-CJ3XRm69.js";import{B as a}from"./Button-e99RFJRf.js";import{R as g,a as b}from"./Radio-BEqtTmCc.js";import{C as h}from"./CheckboxGroup-CanOaU_h.js";import{C as k}from"./Checkbox-B7ykJk2H.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-CeeuZE1p.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-Cu02Wk_7.js";import"./useFocusRing-D8-w_OEY.js";import"./index-B1dkH4Tx.js";import"./index-Bw5AH5dE.js";import"./TextFieldBase-BPm-74vT.js";import"./TextField-BoWQMl5F.js";import"./FieldError-BaPzs5kn.js";import"./Text-BGntVnAb.js";import"./Text-HoQQIpPj.js";import"./ListKeyboardDelegate-CBPQL1Bb.js";import"./SelectionManager-Cd7_qbj6.js";import"./useEvent-BGg2fppv.js";import"./scrollIntoView-Dsrcj58z.js";import"./FocusScope-BxIuhKIG.js";import"./useDescription-Cy4jLEmJ.js";import"./useControlledState-D8NuGAIP.js";import"./Group-B403SmQd.js";import"./Input-7rSuvUbC.js";import"./Hidden-q_RpAWvD.js";import"./Button-B64mDLDr.js";import"./useLabels-BPveYFUn.js";import"./useButton-BdLyQ7RK.js";import"./useTextField-CHL4ATse.js";import"./useField-DbVni0eH.js";import"./TextField.module-CBRvGQ7k.js";import"./Label-CqjtS3DD.js";import"./Dialog-BfewddNP.js";import"./RSPContexts-BV13kQVk.js";import"./OverlayArrow-DQYuyPCR.js";import"./useResizeObserver-CmK3rLOG.js";import"./Collection-B0-0gA29.js";import"./index-BtUcjMxu.js";import"./Separator-B2Bk5eUd.js";import"./PressResponder-vCoKeSf0.js";import"./useLocalizedStringFormatter-ZSr1NUdl.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-CvodOSaS.js";import"./VisuallyHidden-Di0w7zNf.js";import"./Dialog-B3WjWXZh.js";import"./useLocalizedStringFormatter-BI_v31Zs.js";import"./x-D_n1jU0Z.js";import"./createLucideIcon-BfGcVdzf.js";import"./Heading-Dxu68MNP.js";import"./info-CaQrMIgl.js";import"./Tag-B3iwBFZy.js";import"./ListBox-DakNItNd.js";import"./DragAndDrop-wF13uy1q.js";import"./inertValue-D3E137G3.js";import"./useListState-DTsQssM4.js";import"./useHighlightSelectionDescription-Drs96lZv.js";import"./useUpdateEffect-DinujWSC.js";import"./useHasTabbableChild-CSgSNCPQ.js";import"./check-Ddcng4vx.js";import"./ListBoxSection-Da3rRQPh.js";import"./Virtualizer-Chep51XV.js";import"./useObserveElement-DU2kdup7.js";import"./chevron-down-D_6_uLkP.js";import"./Button.module-DWkXlqFG.js";import"./useToggleState-BabtcU3R.js";const $n={component:j,title:"Examples/Form",tags:["autodocs"],argTypes:{}},m={args:{},render:()=>{const t=["Banan","Apple","Mango"];return n.jsxs(G,{children:[n.jsx(e,{size:12,children:n.jsx(r,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),n.jsx(e,{size:12,children:n.jsx(r,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),n.jsx(e,{size:12,children:n.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:t.map(o=>({id:o,name:o}))})}),n.jsx(e,{children:n.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const t=["A","B","C"],o=["Anledning A","Anledning B","Anledning C"];return n.jsx("div",{children:n.jsxs(G,{children:[n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:o.map(i=>n.jsx(b,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(h,{label:"Databas",description:"Välj databas att söka i",children:t.map(i=>n.jsx(k,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Namn",description:""})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Personnummer"})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:t.map(i=>({name:i,id:i}))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Ärendekod"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{children:"Sök"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};var d,l,p;m.parameters={...m.parameters,docs:{...(d=m.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
