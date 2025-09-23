import{j as n}from"./iframe-mg8-Hzjw.js";import{$ as j}from"./Form-Drvr-tbN.js";import{G}from"./Grid-B3klXTUN.js";import{G as e}from"./GridItem-XZp6G3Gq.js";import{T as r}from"./TextField-C6ay0XXu.js";import{S as I}from"./Select-C2Lx4HTk.js";import{B as a}from"./Button-E76zVLN2.js";import{R as g,a as b}from"./Radio-B_ju8PTy.js";import{C as h}from"./CheckboxGroup-DpGDnrGJ.js";import{C as k}from"./Checkbox-BsDbrbfu.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-CmaLvxHS.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-CxFkp7gf.js";import"./useFocusRing-CR5WsQEw.js";import"./index-dPpiuiWt.js";import"./index-DLEoLmgj.js";import"./TextFieldBase-5LiqVfa2.js";import"./TextField-BDFiSPOo.js";import"./FieldError-CFA1_LYe.js";import"./Text-DhRChmW-.js";import"./Text-DOE_9rrv.js";import"./ListKeyboardDelegate-C0Z9J7dq.js";import"./SelectionManager-CHhh0Njk.js";import"./useEvent-CtV20uNS.js";import"./scrollIntoView-Dsrcj58z.js";import"./FocusScope-B0Zwk0uN.js";import"./useDescription-DZJUz5n5.js";import"./useControlledState-CarTvn9r.js";import"./Group-C4k7kQOl.js";import"./Input-BFMzpMgM.js";import"./Hidden-BIWKVpur.js";import"./Button-COlUY9Rk.js";import"./useLabels-B2D0cjln.js";import"./useButton-DJLwMOCt.js";import"./useTextField-Bkwq8yk7.js";import"./useField-6i7RMsSg.js";import"./TextField.module-DjUItNl5.js";import"./Label-EltdT1cR.js";import"./Dialog-D78k848t.js";import"./RSPContexts-Deb8IYDJ.js";import"./OverlayArrow-DIbEBHp6.js";import"./useResizeObserver-V9yrcLbz.js";import"./Collection-BbCeeHk1.js";import"./index-CZ97CXyf.js";import"./Separator-n8zB81dh.js";import"./PressResponder-NMmqkIZg.js";import"./useLocalizedStringFormatter-Cv43hU8d.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-CvodOSaS.js";import"./VisuallyHidden-BpL_ReZI.js";import"./Dialog-BtqR_k3W.js";import"./useLocalizedStringFormatter-CaMK9Ls-.js";import"./x-Cb6jhycT.js";import"./createLucideIcon-CQ_IUTsC.js";import"./Heading-CikQL3eU.js";import"./info-CpPiC4mO.js";import"./Tag-DhQNk0I_.js";import"./ListBox-BRnbmdaP.js";import"./DragAndDrop-uVoE6BsF.js";import"./inertValue-ByQ4DvLp.js";import"./useListState-lbL7dnjO.js";import"./useHighlightSelectionDescription-D9g4a3VY.js";import"./useUpdateEffect-C3QwHRbE.js";import"./useHasTabbableChild-DEYJHLG2.js";import"./check-DTVw8ZYD.js";import"./ListBoxSection-OxuZf7W9.js";import"./Virtualizer-BnF8A5U1.js";import"./useObserveElement-DBDDzim9.js";import"./chevron-down-BiwS-OIs.js";import"./Button.module-DRhvPh0f.js";import"./useToggleState-DZ_rb1eq.js";const $n={component:j,title:"Examples/Form",tags:["autodocs"],argTypes:{}},m={args:{},render:()=>{const t=["Banan","Apple","Mango"];return n.jsxs(G,{children:[n.jsx(e,{size:12,children:n.jsx(r,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),n.jsx(e,{size:12,children:n.jsx(r,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),n.jsx(e,{size:12,children:n.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:t.map(o=>({id:o,name:o}))})}),n.jsx(e,{children:n.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const t=["A","B","C"],o=["Anledning A","Anledning B","Anledning C"];return n.jsx("div",{children:n.jsxs(G,{children:[n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:o.map(i=>n.jsx(b,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(h,{label:"Databas",description:"Välj databas att söka i",children:t.map(i=>n.jsx(k,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Namn",description:""})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Personnummer"})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:t.map(i=>({name:i,id:i}))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Ärendekod"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{children:"Sök"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};var d,l,p;m.parameters={...m.parameters,docs:{...(d=m.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
