import{j as n}from"./iframe-CyJoHm5r.js";import{$ as j}from"./Form-DGrj4b4F.js";import{G}from"./Grid-DpnCEmex.js";import{G as e}from"./GridItem-R4ayhxa3.js";import{T as r}from"./TextField-C_KyrDkd.js";import{S as I}from"./Select-C6eDiVmx.js";import{B as a}from"./Button-BnaKgPAZ.js";import{R as g,a as b}from"./Radio-tDB74Xzq.js";import{C as h}from"./CheckboxGroup-panp35Oh.js";import{C as k}from"./Checkbox-DH-IM3yh.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-ModePnfM.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-CX3emJON.js";import"./useFocusRing-Cdi7Z3Mg.js";import"./index-B3oeCMYp.js";import"./index-Bey9dCPE.js";import"./TextFieldBase-Dcud1CGT.js";import"./TextField-Bw_ILcaq.js";import"./FieldError-Bav7MAia.js";import"./Text-BKcGGv-L.js";import"./Text-B3qJCfHi.js";import"./context-lCuN0NLQ.js";import"./SelectionManager-Iu_88NXJ.js";import"./useEvent-PlLh5oPN.js";import"./scrollIntoView-Dsrcj58z.js";import"./FocusScope-BF3BROM-.js";import"./useDescription-FWA6z8UB.js";import"./useControlledState-B4yFBrLg.js";import"./Group-Dy8T6OM2.js";import"./Input-CHUaP2II.js";import"./Hidden-CGgZ1HBg.js";import"./Button-By-exDXn.js";import"./useLabels-BGv5yGGP.js";import"./useButton-CE5ZjOXe.js";import"./useTextField-BAcvG6f5.js";import"./useField-Cd_XVAQP.js";import"./TextField.module-DjUItNl5.js";import"./Label-DUetGQUp.js";import"./Dialog--LvT-msf.js";import"./RSPContexts-B1wTV7X3.js";import"./OverlayArrow-Du6Qbcy6.js";import"./useResizeObserver-DKbzIKoE.js";import"./Collection-BM9eZGjV.js";import"./index-C1e_-02s.js";import"./Separator-BDGRqg_U.js";import"./PressResponder-C_pRmgKb.js";import"./useLocalizedStringFormatter-BM5Ffnnd.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-CvodOSaS.js";import"./VisuallyHidden-B2L2f3lG.js";import"./useLocalizedStringFormatter-DfYFvNUE.js";import"./x-C7_O_qWj.js";import"./createLucideIcon-CzLf1g6E.js";import"./Heading-Bedh8JRm.js";import"./info-DuObm_4z.js";import"./Popover-C9-70urL.js";import"./Tag-Cz4RN50C.js";import"./ListBox-VoSaBXtF.js";import"./DragAndDrop-Up2po57R.js";import"./inertValue-C9ksx0P0.js";import"./useListState-DviwjtGh.js";import"./useHighlightSelectionDescription-BEmdK-2v.js";import"./useUpdateEffect-1CgTJ6UV.js";import"./useHasTabbableChild-ptW3zmq1.js";import"./check-kJAJQHNw.js";import"./ListBoxSection-BZD4O2Y7.js";import"./Virtualizer-CGElqIaf.js";import"./useObserveElement-DTPlFHAh.js";import"./chevron-down-Cg9t-k04.js";import"./Button.module-DRhvPh0f.js";import"./useToggleState-Ckkz9QEo.js";const $n={component:j,title:"Examples/Form",tags:["autodocs"],argTypes:{}},m={args:{},render:()=>{const t=["Banan","Apple","Mango"];return n.jsxs(G,{children:[n.jsx(e,{size:12,children:n.jsx(r,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),n.jsx(e,{size:12,children:n.jsx(r,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),n.jsx(e,{size:12,children:n.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:t.map(o=>({id:o,name:o}))})}),n.jsx(e,{children:n.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const t=["A","B","C"],o=["Anledning A","Anledning B","Anledning C"];return n.jsx("div",{children:n.jsxs(G,{children:[n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:o.map(i=>n.jsx(b,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(h,{label:"Databas",description:"Välj databas att söka i",children:t.map(i=>n.jsx(k,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Namn",description:""})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Personnummer"})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:t.map(i=>({name:i,id:i}))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Ärendekod"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{children:"Sök"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};var d,l,p;m.parameters={...m.parameters,docs:{...(d=m.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
