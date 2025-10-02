import{j as n}from"./iframe-CdSl9BJN.js";import{$ as j}from"./Form-mRwzJiyn.js";import{G}from"./Grid-BN6lriiv.js";import{G as e}from"./GridItem-C6OeQlSy.js";import{T as r}from"./TextField-D4qfj_nk.js";import{S as I}from"./Select-dVX8h-CE.js";import{B as a}from"./Button-DzpkVwqx.js";import{R as g,a as b}from"./Radio-BJsOUKPl.js";import{C as h}from"./CheckboxGroup-6p9yIJtz.js";import{C as k}from"./Checkbox-CPaHF-G-.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-BY-MgxZk.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-Ctq-B72w.js";import"./useFocusRing-C2djaEmJ.js";import"./index-BCshj0yo.js";import"./index-DqXCPiS2.js";import"./TextFieldBase-mf3mroNK.js";import"./TextField-FfCRDOPO.js";import"./FieldError-YpOmfGbl.js";import"./Text-qGs4dn9Z.js";import"./Text-Cz7lVWuM.js";import"./context-D1Ix7Mf6.js";import"./SelectionManager-BkGq2u8z.js";import"./useEvent-7GssIpYJ.js";import"./scrollIntoView-Dsrcj58z.js";import"./FocusScope-BV-FjAed.js";import"./useDescription-C7KaFIlZ.js";import"./useControlledState-BRV_sNRI.js";import"./Group-qolTxwFo.js";import"./Input-bdT_PcvS.js";import"./Hidden-BE4GUIk5.js";import"./Button-WLp7kXyI.js";import"./useLabels-CXFAc3Yp.js";import"./useButton-C2T7XZeH.js";import"./useTextField-DQntpZb8.js";import"./useField-B4wYxwfO.js";import"./TextField.module-DjUItNl5.js";import"./Label-BgWsTNNU.js";import"./Dialog-CwjJYtNP.js";import"./RSPContexts-ChRWvBJ-.js";import"./OverlayArrow-CB5JwIyZ.js";import"./useResizeObserver-BUC_QGAs.js";import"./Collection-CwlaGB97.js";import"./index-C-GpREPZ.js";import"./Separator-CDjHSTtZ.js";import"./PressResponder-RjH_ovNU.js";import"./useLocalizedStringFormatter-bAiO2mY-.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-CvodOSaS.js";import"./VisuallyHidden-BZpxfzmq.js";import"./useLocalizedStringFormatter-Cqwe3VZE.js";import"./x-B4VzPsGB.js";import"./createLucideIcon-CwSL82L5.js";import"./Heading-No6YG3uC.js";import"./info-BhK7w67k.js";import"./Popover-8sz_vwLT.js";import"./Tag-DJpKTOaQ.js";import"./ListBox-DSOWeL6x.js";import"./DragAndDrop-BvSo93_j.js";import"./inertValue-_JJOp_Zq.js";import"./useListState-DcVMqOvO.js";import"./useHighlightSelectionDescription-Bk2nXQP4.js";import"./useUpdateEffect-DJ2azPea.js";import"./useHasTabbableChild-DMQh7zRs.js";import"./check-CzeXZGtF.js";import"./ListBoxSection-BvznPcFD.js";import"./Virtualizer-CqTscpgE.js";import"./useObserveElement-h2Ig7hdn.js";import"./chevron-down-qkpaUsRs.js";import"./Button.module-DiZbaUKl.js";import"./useToggleState-CAHpBs2_.js";const $n={component:j,title:"Examples/Form",tags:["autodocs"],argTypes:{}},m={args:{},render:()=>{const t=["Banan","Apple","Mango"];return n.jsxs(G,{children:[n.jsx(e,{size:12,children:n.jsx(r,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),n.jsx(e,{size:12,children:n.jsx(r,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),n.jsx(e,{size:12,children:n.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:t.map(o=>({id:o,name:o}))})}),n.jsx(e,{children:n.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const t=["A","B","C"],o=["Anledning A","Anledning B","Anledning C"];return n.jsx("div",{children:n.jsxs(G,{children:[n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:o.map(i=>n.jsx(b,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(h,{label:"Databas",description:"Välj databas att söka i",children:t.map(i=>n.jsx(k,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Namn",description:""})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Personnummer"})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:t.map(i=>({name:i,id:i}))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Ärendekod"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{children:"Sök"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};var d,l,p;m.parameters={...m.parameters,docs:{...(d=m.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
