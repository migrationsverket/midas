import{j as n}from"./iframe-Cg0ufsuZ.js";import{$ as j}from"./Form-pXyM0XO5.js";import{G}from"./Grid-DJikOVHR.js";import{G as e}from"./GridItem-BbbeVwBY.js";import{T as r}from"./TextField-B-WmzzJ1.js";import{S as I}from"./Select-epEBq8eK.js";import{B as a}from"./Button-CiI-d9j7.js";import{R as g,a as b}from"./Radio-B7YeBjm0.js";import{C as h}from"./CheckboxGroup-N-ry4-zM.js";import{C as k}from"./Checkbox-D-c0agf5.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-CtbsCbeQ.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-CuB3kH2x.js";import"./useFocusRing-BnATjMaU.js";import"./index-C-pGwklB.js";import"./index-CYU64Ftz.js";import"./TextFieldBase-j8J_XdAV.js";import"./TextField-CZg5eRZD.js";import"./FieldError-utriByKd.js";import"./Text-DtlCEfGo.js";import"./Text-CimMCGdB.js";import"./ListKeyboardDelegate-B5fBTNVL.js";import"./SelectionManager-BJUqwE0x.js";import"./useEvent-BdM6SDIZ.js";import"./scrollIntoView-Dsrcj58z.js";import"./FocusScope-Kqo4pkgP.js";import"./useDescription-BRcoOYdV.js";import"./useControlledState-BoUCgmoj.js";import"./Group-Cju4WAMx.js";import"./Input-Bcqb75f1.js";import"./Hidden-CyW2atD4.js";import"./Button-x4Gj6aY1.js";import"./useLabels-BQDbVKF9.js";import"./useButton-CdBxlWdT.js";import"./useTextField-qd9Zbynz.js";import"./useField-BN1XJUpx.js";import"./TextField.module-CBRvGQ7k.js";import"./Label-2c62RPOf.js";import"./Dialog-CCDme8TC.js";import"./RSPContexts-BKtXgQNg.js";import"./OverlayArrow-DzRyPDxh.js";import"./useResizeObserver-BDqh2t7_.js";import"./Collection-BzCpNjBE.js";import"./index-USwtbqDu.js";import"./Separator-BRsiMVYr.js";import"./PressResponder-sfwRbpY2.js";import"./useLocalizedStringFormatter-MP4Ox2lR.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-CvodOSaS.js";import"./VisuallyHidden-Bl04VHX_.js";import"./Dialog-DlYnDIQG.js";import"./useLocalizedStringFormatter-BfMNp9xN.js";import"./x-4zrwyJBK.js";import"./createLucideIcon-CivItIyF.js";import"./Heading-DyN9Hh-T.js";import"./info-BejeZStS.js";import"./Tag-D4WUqjDn.js";import"./ListBox-CiqTvbI1.js";import"./DragAndDrop-DKmiwfqn.js";import"./inertValue-BDkay3_w.js";import"./useListState-B1YoIaR2.js";import"./useHighlightSelectionDescription-D8QfoEhs.js";import"./useUpdateEffect-CrCC9Ufp.js";import"./useHasTabbableChild-BRutanW7.js";import"./check-1B4Axus5.js";import"./ListBoxSection-CT7aSL42.js";import"./Virtualizer-DYrsn7NG.js";import"./useObserveElement-mReJKK1W.js";import"./chevron-down-moniRb_X.js";import"./Button.module-DgYkWG2o.js";import"./useToggleState-CqbYS5K1.js";const $n={component:j,title:"Examples/Form",tags:["autodocs"],argTypes:{}},m={args:{},render:()=>{const t=["Banan","Apple","Mango"];return n.jsxs(G,{children:[n.jsx(e,{size:12,children:n.jsx(r,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),n.jsx(e,{size:12,children:n.jsx(r,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),n.jsx(e,{size:12,children:n.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:t.map(o=>({id:o,name:o}))})}),n.jsx(e,{children:n.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const t=["A","B","C"],o=["Anledning A","Anledning B","Anledning C"];return n.jsx("div",{children:n.jsxs(G,{children:[n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:o.map(i=>n.jsx(b,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(h,{label:"Databas",description:"Välj databas att söka i",children:t.map(i=>n.jsx(k,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Namn",description:""})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Personnummer"})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:t.map(i=>({name:i,id:i}))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Ärendekod"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{children:"Sök"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};var d,l,p;m.parameters={...m.parameters,docs:{...(d=m.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
