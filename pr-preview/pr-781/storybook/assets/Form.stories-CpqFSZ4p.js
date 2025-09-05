import{j as n}from"./iframe-WQ1lsKcr.js";import{$ as j}from"./Form-BiJxDAx3.js";import{G}from"./Grid-Cg5BSqd2.js";import{G as e}from"./GridItem-Bpt9kXRJ.js";import{T as r}from"./TextField-C2xeEyt8.js";import{S as I}from"./Select-RAICk7Lm.js";import{B as a}from"./Button-DU8tpnuI.js";import{R as g,a as b}from"./Radio-B9vwZHF4.js";import{C as h}from"./CheckboxGroup-B6vr1Nzj.js";import{C as k}from"./Checkbox-CDm04yWM.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-CHlCFsGs.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-CEgo7jXj.js";import"./useFocusRing-CBMtx5yy.js";import"./index-BJtq6oOm.js";import"./index-B8NyoKSS.js";import"./TextFieldBase-s_5Fc0It.js";import"./TextField-MxPG95UG.js";import"./FieldError-HkpQ8akY.js";import"./Text-DTlPm7j0.js";import"./Text-CInC8huC.js";import"./ListKeyboardDelegate-CFf-iVE5.js";import"./SelectionManager-5m0qvuA6.js";import"./useEvent-CyYrFPZv.js";import"./scrollIntoView-Dsrcj58z.js";import"./FocusScope-HrK9_yZK.js";import"./useDescription-D4AMVWeE.js";import"./useControlledState-DyrxLvoj.js";import"./Group-BqRxz-C_.js";import"./Input-DSSFYwh0.js";import"./Hidden-BNrx2ueH.js";import"./Button-BDwDasQj.js";import"./useLabels-DJC3Yq0T.js";import"./useButton-z9_YOEOm.js";import"./useTextField-CI0SLfSQ.js";import"./useField-lUPJrWK_.js";import"./TextField.module-BrIGiDQC.js";import"./Label-CBGVJ060.js";import"./Dialog-Dj7kfeVo.js";import"./RSPContexts-hySVkq_4.js";import"./OverlayArrow-BIAeK4fl.js";import"./useResizeObserver-C0FPWZlV.js";import"./Collection-BB10YKry.js";import"./index-BYah2PgG.js";import"./Separator-BzB7cahw.js";import"./PressResponder-ILwXcCDF.js";import"./useLocalizedStringFormatter-G83BjFFi.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-CvodOSaS.js";import"./VisuallyHidden-BiQMdt4p.js";import"./Dialog-DzwicKvy.js";import"./useLocalizedStringFormatter-BomzOufi.js";import"./x-MqgoWOKa.js";import"./createLucideIcon-BwQv0LNn.js";import"./Heading-TzJL4tyh.js";import"./info-CnCWeedp.js";import"./Tag-bxNT92mt.js";import"./ListBox-Bd--StdP.js";import"./DragAndDrop-WlIwY8QG.js";import"./inertValue-DLsEkSiT.js";import"./useListState-CKuGdbap.js";import"./useHighlightSelectionDescription-C9cF6h5x.js";import"./useUpdateEffect-BV6cyibX.js";import"./useHasTabbableChild-BdpIiRd3.js";import"./check-Bjn5dStX.js";import"./ListBoxSection-BnqvlmSS.js";import"./Virtualizer-BnVBVL1X.js";import"./useObserveElement-CKvr8ZIH.js";import"./chevron-down-BzWIM-uh.js";import"./Button.module-CF2bVDCq.js";import"./useToggleState-CjQlPZor.js";const $n={component:j,title:"Examples/Form",tags:["autodocs"],argTypes:{}},m={args:{},render:()=>{const t=["Banan","Apple","Mango"];return n.jsxs(G,{children:[n.jsx(e,{size:12,children:n.jsx(r,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),n.jsx(e,{size:12,children:n.jsx(r,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),n.jsx(e,{size:12,children:n.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:t.map(o=>({id:o,name:o}))})}),n.jsx(e,{children:n.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const t=["A","B","C"],o=["Anledning A","Anledning B","Anledning C"];return n.jsx("div",{children:n.jsxs(G,{children:[n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:o.map(i=>n.jsx(b,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(h,{label:"Databas",description:"Välj databas att söka i",children:t.map(i=>n.jsx(k,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Namn",description:""})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Personnummer"})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:t.map(i=>({name:i,id:i}))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Ärendekod"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{children:"Sök"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};var d,l,p;m.parameters={...m.parameters,docs:{...(d=m.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
