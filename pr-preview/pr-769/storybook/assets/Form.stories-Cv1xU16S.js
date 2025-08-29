import{j as n}from"./iframe-BExlenCQ.js";import{$ as j}from"./Form-C26s7mZq.js";import{G}from"./Grid-CnWhiI-E.js";import{G as e}from"./GridItem-DFrsgsfj.js";import{T as r}from"./TextField-CNybYcSL.js";import{S as I}from"./Select-NPq3BKUS.js";import{B as a}from"./Button-B8N8TnnH.js";import{R as g,a as b}from"./Radio-BsdeRWlL.js";import{C as h}from"./CheckboxGroup-CAtZ9rAb.js";import{C as k}from"./Checkbox-CB36CaIM.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-C6RjMp7H.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-DAjzqyFc.js";import"./useFocusRing-DLuM98Kk.js";import"./index-YhXIT21j.js";import"./index-BMtkQeCX.js";import"./TextFieldBase-C47ptlw2.js";import"./TextField-K5YO96sP.js";import"./FieldError-zewAB-VK.js";import"./Text-BWlRQ3Mg.js";import"./Text-DERMy_3y.js";import"./Input-DkHA7IwW.js";import"./Hidden-GKaJLmHj.js";import"./Button-C9bs2Wi1.js";import"./useLabels-CDUGqJTT.js";import"./useButton-iU2M42KN.js";import"./useTextField-DdAZchMN.js";import"./useControlledState-Dz8WCj4P.js";import"./useField-DKsTJ6Gr.js";import"./TextField.module-BrIGiDQC.js";import"./Label-C7qOJEhJ.js";import"./Dialog-BAhfodli.js";import"./RSPContexts-Dx95UPN9.js";import"./OverlayArrow-DVTPc1k5.js";import"./useResizeObserver-movgoZfL.js";import"./Collection-B9ALQ5jO.js";import"./index-D2Zpwabu.js";import"./Separator-CMQtVXIL.js";import"./SelectionManager-CwbUE3OB.js";import"./useEvent-C4-TW8ZK.js";import"./scrollIntoView-Dsrcj58z.js";import"./FocusScope-B_Tu2dIL.js";import"./useDescription-B4y-a6ps.js";import"./ListKeyboardDelegate-B152EyHK.js";import"./PressResponder-CdQTyPjj.js";import"./useLocalizedStringFormatter-BqCwtdeN.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-CvodOSaS.js";import"./VisuallyHidden-CzghXzio.js";import"./Dialog-CvRa5A2c.js";import"./useLocalizedStringFormatter-KqpJaCwq.js";import"./x-BB6h2sWr.js";import"./createLucideIcon-B1Y0HDaz.js";import"./Heading-V_6ZIFUB.js";import"./info-Tivg7gv5.js";import"./Tag-DHAvmmlW.js";import"./ListBox-C0tujrcy.js";import"./DragAndDrop-DPPPKiOD.js";import"./inertValue-DMnAwtHF.js";import"./useListState-BO82boyC.js";import"./useHighlightSelectionDescription-CAiZuMNy.js";import"./useUpdateEffect-CbjGUxlA.js";import"./useHasTabbableChild-BGz_4sw_.js";import"./check-CflBQxoW.js";import"./ListBoxSection-CUFR1WpV.js";import"./Virtualizer-CLP0gyUW.js";import"./useObserveElement-CbAEa6_n.js";import"./chevron-down-C7Y7U1vX.js";import"./Button.module-CF2bVDCq.js";import"./Group-pHKo6dlE.js";import"./useToggleState-9a_zLnKh.js";const $n={component:j,title:"Examples/Form",tags:["autodocs"],argTypes:{}},m={args:{},render:()=>{const t=["Banan","Apple","Mango"];return n.jsxs(G,{children:[n.jsx(e,{size:12,children:n.jsx(r,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),n.jsx(e,{size:12,children:n.jsx(r,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),n.jsx(e,{size:12,children:n.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:t.map(o=>({id:o,name:o}))})}),n.jsx(e,{children:n.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const t=["A","B","C"],o=["Anledning A","Anledning B","Anledning C"];return n.jsx("div",{children:n.jsxs(G,{children:[n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:o.map(i=>n.jsx(b,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(h,{label:"Databas",description:"Välj databas att söka i",children:t.map(i=>n.jsx(k,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Namn",description:""})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Personnummer"})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:t.map(i=>({name:i,id:i}))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Ärendekod"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{children:"Sök"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};var d,l,p;m.parameters={...m.parameters,docs:{...(d=m.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
