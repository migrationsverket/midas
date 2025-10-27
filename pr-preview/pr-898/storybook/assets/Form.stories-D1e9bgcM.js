import{j as n}from"./iframe-gGWQLxkD.js";import{$ as j}from"./Form-DVSCSmqs.js";import{G}from"./Grid-Bgn-0kU9.js";import{G as e}from"./GridItem-DDChlQ_i.js";import{T as r}from"./TextField-Bd46dm6_.js";import{S as I}from"./Select-D6ho_-4P.js";import{B as a}from"./Button-NOSs_CIu.js";import{R as g,a as b}from"./Radio-C02QClBO.js";import{C as h}from"./CheckboxGroup-CSAMAsot.js";import{C as k}from"./Checkbox-CTQoA__d.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-COVNf6xx.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-BKIuKDvQ.js";import"./useFocusRing-CugJUgrJ.js";import"./index-99xU0zCD.js";import"./index-5_rsHiJU.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-C7kySjyN.js";import"./TextField-B6iApOOm.js";import"./FieldError-CkBNt-cC.js";import"./Text-RVs07wA0.js";import"./Text-BQ5WcnBo.js";import"./RSPContexts-DHjo2paE.js";import"./Group-Dw1HChil.js";import"./Input-ChNFhNmN.js";import"./Hidden-DBrW_Lqf.js";import"./Button--dJgDeV1.js";import"./useLabels-B7qxnk5a.js";import"./useButton-DQsYOVHU.js";import"./useTextField-RApgwRGS.js";import"./useControlledState-Cs2zNTA2.js";import"./useField-BMk1sFmj.js";import"./TextField.module-Ddb2XBAw.js";import"./Label-By2BGUna.js";import"./Dialog-Cjp09kWb.js";import"./OverlayArrow-DfE-WTmw.js";import"./useResizeObserver-DjPieLn8.js";import"./Collection-BUJ8ktUg.js";import"./index-DBzRzV8X.js";import"./Separator-DE-WELiL.js";import"./SelectionManager-DimPVa7U.js";import"./useEvent-DeHUnjIk.js";import"./scrollIntoView-CeU_w8rc.js";import"./SelectionIndicator-BbWclmwE.js";import"./useDescription-Dk7JAtZ6.js";import"./ListKeyboardDelegate-XHFGwhDW.js";import"./PressResponder-P1dkG7ed.js";import"./useLocalizedStringFormatter-BYjc7C_K.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-CY8-H0nW.js";import"./VisuallyHidden-DccjF9UD.js";import"./useLocalizedStringFormatter-KBr6Iy8G.js";import"./x-u1wMqsg_.js";import"./createLucideIcon-BM0PUz9v.js";import"./Heading-In0eJv3L.js";import"./info-BzT__lCY.js";import"./Popover-Dl9KoyCG.js";import"./Tag-YFpHWWBb.js";import"./ListBox-Dd0U2Us_.js";import"./DragAndDrop-CM5nmD4F.js";import"./inertValue-BBW3JNxE.js";import"./useListState-DpKCW7fB.js";import"./useHighlightSelectionDescription-DtIg1g9Y.js";import"./useUpdateEffect-5hrPh02G.js";import"./useHasTabbableChild-ChjBVn94.js";import"./check-Z39F7smR.js";import"./ListBoxSection-DMfQtThc.js";import"./Virtualizer-B1cBwQu2.js";import"./chevron-down-CE6EklYL.js";import"./Button.module-CcWMkJAG.js";import"./useToggleState-BwqOuxcg.js";const $n={component:j,title:"Examples/Form",tags:["autodocs"],argTypes:{}},m={args:{},render:()=>{const t=["Banan","Apple","Mango"];return n.jsxs(G,{children:[n.jsx(e,{size:12,children:n.jsx(r,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),n.jsx(e,{size:12,children:n.jsx(r,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),n.jsx(e,{size:12,children:n.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:t.map(o=>({id:o,name:o}))})}),n.jsx(e,{children:n.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const t=["A","B","C"],o=["Anledning A","Anledning B","Anledning C"];return n.jsx("div",{children:n.jsxs(G,{children:[n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:o.map(i=>n.jsx(b,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(h,{label:"Databas",description:"Välj databas att söka i",children:t.map(i=>n.jsx(k,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Namn",description:""})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Personnummer"})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:t.map(i=>({name:i,id:i}))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Ärendekod"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{children:"Sök"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};var d,l,p;m.parameters={...m.parameters,docs:{...(d=m.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
