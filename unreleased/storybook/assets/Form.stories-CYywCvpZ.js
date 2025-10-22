import{j as n}from"./iframe-DrsgbWcS.js";import{$ as j}from"./Form-CSv_ZXzr.js";import{G}from"./Grid-BHNpySjJ.js";import{G as e}from"./GridItem-Cx4iNdnM.js";import{T as r}from"./TextField-BtJUGgK2.js";import{S as I}from"./Select-CmSuNOAR.js";import{B as a}from"./Button-6JaavlVR.js";import{R as g,a as b}from"./Radio-DkdxGHm3.js";import{C as h}from"./CheckboxGroup-B5HagSeN.js";import{C as k}from"./Checkbox-BJJw03zz.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-CvT7tRmv.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-DbvGwn06.js";import"./useFocusRing-D0Tiqu35.js";import"./index-BSsrWq09.js";import"./index-CeYxDNf4.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-kHbCJyeM.js";import"./TextField-1Om_Ekjt.js";import"./FieldError-DIm9TTkO.js";import"./Text-BdyOrMpR.js";import"./Text-CBD1nPUb.js";import"./RSPContexts-C8ISmEo_.js";import"./Group-PKfG57Hj.js";import"./Input-CGo8xzsF.js";import"./Hidden-D6j5TZOc.js";import"./Button-WjHpVlWr.js";import"./useLabels-DlAUCJIN.js";import"./useButton-Cz4p1km8.js";import"./useTextField-D8joMDgb.js";import"./useControlledState-DFNM4Pqx.js";import"./useField-DEYyB9EP.js";import"./TextField.module-Ddb2XBAw.js";import"./Label-_rJzQQeD.js";import"./Dialog-DHvAUcE0.js";import"./OverlayArrow-Ba9al18z.js";import"./useResizeObserver-B9sHjicJ.js";import"./Collection-C89L-o95.js";import"./index-CDp3ifDh.js";import"./Separator-CtNL6W8K.js";import"./SelectionManager-CmrP4LD6.js";import"./useEvent-BR5etH4q.js";import"./scrollIntoView-D1zBwAWT.js";import"./SelectionIndicator-BbfjKu3u.js";import"./useDescription-BIDnrOJx.js";import"./ListKeyboardDelegate-CP_sBiXS.js";import"./PressResponder-BY3NHRSt.js";import"./useLocalizedStringFormatter-B8msf5E9.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-l-4aH0Ws.js";import"./VisuallyHidden-8DJT7r3H.js";import"./useLocalizedStringFormatter-CR3qtSGI.js";import"./x-Cw8J5Aa5.js";import"./createLucideIcon-gtijxSOP.js";import"./Heading-BDz3Gv6L.js";import"./info-Czqs29QQ.js";import"./Popover-DmCFQw31.js";import"./Tag-BS--w0rA.js";import"./ListBox-zk0r5HP9.js";import"./DragAndDrop-Diwhx1z6.js";import"./inertValue-CLy2EqI_.js";import"./useListState-C9FZRSK2.js";import"./useHighlightSelectionDescription-DiDB1wY7.js";import"./useUpdateEffect-CsOoEnse.js";import"./useHasTabbableChild-B_9ZIwqK.js";import"./check-DOwGNsC1.js";import"./ListBoxSection-DhdWQD3Q.js";import"./Virtualizer-hng5OHec.js";import"./chevron-down-BlXM68UL.js";import"./Button.module-CcWMkJAG.js";import"./useToggleState-D2xU_MmF.js";const $n={component:j,title:"Examples/Form",tags:["autodocs"],argTypes:{}},m={args:{},render:()=>{const t=["Banan","Apple","Mango"];return n.jsxs(G,{children:[n.jsx(e,{size:12,children:n.jsx(r,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),n.jsx(e,{size:12,children:n.jsx(r,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),n.jsx(e,{size:12,children:n.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:t.map(o=>({id:o,name:o}))})}),n.jsx(e,{children:n.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const t=["A","B","C"],o=["Anledning A","Anledning B","Anledning C"];return n.jsx("div",{children:n.jsxs(G,{children:[n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:o.map(i=>n.jsx(b,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(h,{label:"Databas",description:"Välj databas att söka i",children:t.map(i=>n.jsx(k,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Namn",description:""})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Personnummer"})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:t.map(i=>({name:i,id:i}))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Ärendekod"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{children:"Sök"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};var d,l,p;m.parameters={...m.parameters,docs:{...(d=m.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
