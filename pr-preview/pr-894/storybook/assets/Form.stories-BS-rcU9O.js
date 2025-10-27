import{j as n}from"./iframe-nNM2zXEP.js";import{$ as j}from"./Form-C9kR7bVg.js";import{G}from"./Grid-BpGEOxTA.js";import{G as e}from"./GridItem-BR6nfet4.js";import{T as r}from"./TextField-s35YmYzo.js";import{S as I}from"./Select-CLjUGM35.js";import{B as a}from"./Button-DatXIA1i.js";import{R as g,a as b}from"./Radio-Y1OVMpvR.js";import{C as h}from"./CheckboxGroup-DJ74GmgX.js";import{C as k}from"./Checkbox-CQKp2uBM.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-CofUL2gS.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-DAM7P2ni.js";import"./useFocusRing-l6Yplvhj.js";import"./index-BOQeLQop.js";import"./index-BGt-FRei.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-bAxDdmoM.js";import"./TextField-D5VwdXH5.js";import"./FieldError-QnkOU3Hp.js";import"./Text-CAaaXfLw.js";import"./Text-Bhbxhu-m.js";import"./RSPContexts-D3DeOn11.js";import"./Group-DZGVH1CG.js";import"./Input-tgGYpUfy.js";import"./Hidden-CdvTVZFK.js";import"./Button-Deh_MhmS.js";import"./useLabels-zQ-ioPUi.js";import"./useButton-BxeB6HSS.js";import"./useTextField-CI3A6ibR.js";import"./useControlledState-UqYS5nUc.js";import"./useField-Df_n3bvV.js";import"./TextField.module-Ddb2XBAw.js";import"./Label-DBlRNuV2.js";import"./Dialog-BuJQ-Vwk.js";import"./OverlayArrow-BaOaNdPz.js";import"./useResizeObserver-CrRLvCwN.js";import"./Collection-CtWsEDiy.js";import"./index-BWlJETQW.js";import"./Separator-Iu1NRBZP.js";import"./SelectionManager-BAX9sNQx.js";import"./useEvent-C6j8zE_7.js";import"./scrollIntoView-BQxKqSzx.js";import"./SelectionIndicator-C7nAgBmE.js";import"./useDescription-BMiCs1Q5.js";import"./ListKeyboardDelegate-DrvXkBIC.js";import"./PressResponder-CafbPKhT.js";import"./useLocalizedStringFormatter-GZsnVnJn.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-CHL_LitK.js";import"./VisuallyHidden-BQwCvnVa.js";import"./useLocalizedStringFormatter-DbqnmgMj.js";import"./x-NoiibOgS.js";import"./createLucideIcon-C8elrRh4.js";import"./Heading-CQP-D84S.js";import"./info-RTz4cL1l.js";import"./Popover-LrRvhc59.js";import"./Tag-COuP2Og1.js";import"./ListBox-BTgWs5GD.js";import"./DragAndDrop-CcRXmHgL.js";import"./inertValue-CAUkuVKZ.js";import"./useListState-oyt9cAa4.js";import"./useHighlightSelectionDescription-2YhB1NmD.js";import"./useUpdateEffect-CMS7ekYp.js";import"./useHasTabbableChild-Cv8Nv_vy.js";import"./check-BbY_EdWN.js";import"./ListBoxSection-D843mcM7.js";import"./Virtualizer-BIN14E2n.js";import"./chevron-down-CeIsHx8x.js";import"./Button.module-CcWMkJAG.js";import"./useToggleState-DgcF3t0f.js";const $n={component:j,title:"Examples/Form",tags:["autodocs"],argTypes:{}},m={args:{},render:()=>{const t=["Banan","Apple","Mango"];return n.jsxs(G,{children:[n.jsx(e,{size:12,children:n.jsx(r,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),n.jsx(e,{size:12,children:n.jsx(r,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),n.jsx(e,{size:12,children:n.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:t.map(o=>({id:o,name:o}))})}),n.jsx(e,{children:n.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const t=["A","B","C"],o=["Anledning A","Anledning B","Anledning C"];return n.jsx("div",{children:n.jsxs(G,{children:[n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:o.map(i=>n.jsx(b,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(h,{label:"Databas",description:"Välj databas att söka i",children:t.map(i=>n.jsx(k,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Namn",description:""})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Personnummer"})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:t.map(i=>({name:i,id:i}))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Ärendekod"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{children:"Sök"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};var d,l,p;m.parameters={...m.parameters,docs:{...(d=m.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
