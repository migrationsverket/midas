import{j as n}from"./iframe-Y_DjccHQ.js";import{$ as j}from"./Form-npKC56Sc.js";import{G}from"./Grid-CjOYs1zg.js";import{G as e}from"./GridItem-BJdjH_5Q.js";import{T as r}from"./TextField-Ytgz9eGs.js";import{S as I}from"./Select-KtQGM0sq.js";import{B as a}from"./Button-JCaXUR34.js";import{R as g,a as b}from"./Radio-CFY-9FTh.js";import{C as h}from"./CheckboxGroup-Cvx7o6tB.js";import{C as k}from"./Checkbox-CkmxKZo3.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-B69TGfDa.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-BlSfc927.js";import"./useFocusRing-D__kEhyz.js";import"./index-6gxVwJD-.js";import"./index-B2_Vjczx.js";import"./TextFieldBase-BCEyXQQU.js";import"./TextField-BjaV7bH0.js";import"./FieldError-BmMw_Gp-.js";import"./Text-CVVxx-WX.js";import"./Text-Cc4_KUyN.js";import"./context-biNfedgb.js";import"./SelectionManager-CC10FDEL.js";import"./useEvent-CBgE5-54.js";import"./scrollIntoView-Dsrcj58z.js";import"./FocusScope-DZnoS05a.js";import"./useDescription-MQLqtwMe.js";import"./useControlledState-DMs7rSlj.js";import"./Group-Jqph1q4R.js";import"./Input-DpK3y3gX.js";import"./Hidden-DlXiVsJJ.js";import"./Button-CmQOXTbq.js";import"./useLabels-BBaxEgH7.js";import"./useButton-BvtzmwWD.js";import"./useTextField-BNrM3_nO.js";import"./useField-DjjJz5a2.js";import"./TextField.module-DjUItNl5.js";import"./Label-DLUujnq2.js";import"./Dialog-BHPKiYqM.js";import"./RSPContexts-CJEnc-Uq.js";import"./OverlayArrow-DPxISWiN.js";import"./useResizeObserver-DnAaxxHO.js";import"./Collection-CUevtSwv.js";import"./index-CF6mX5IA.js";import"./Separator-CWWcsJAg.js";import"./PressResponder-xfymAbgU.js";import"./useLocalizedStringFormatter-NUX4zJn1.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-CvodOSaS.js";import"./VisuallyHidden-Dqrjz6UI.js";import"./useLocalizedStringFormatter-CAF1xZTE.js";import"./x-DEz5k-Yf.js";import"./createLucideIcon-DbwO5t_G.js";import"./Heading-BeFKs47F.js";import"./info-qZWYSHYD.js";import"./Popover-C4m1ndWt.js";import"./Tag-Bu52XGqs.js";import"./ListBox-C9Opsycg.js";import"./DragAndDrop-DpwkM2cA.js";import"./inertValue-bJk9Bkr7.js";import"./useListState-DWp4Wc03.js";import"./useHighlightSelectionDescription-DdpsX9JU.js";import"./useUpdateEffect-B3rAWdBz.js";import"./useHasTabbableChild-Dx4se0jP.js";import"./check-C9IoxOLw.js";import"./ListBoxSection-Ddvw3CCp.js";import"./Virtualizer-BVhh3tSf.js";import"./useObserveElement-Cd-IBIk3.js";import"./chevron-down-BH94na3k.js";import"./Button.module-DRhvPh0f.js";import"./useToggleState-GudVFik7.js";const $n={component:j,title:"Examples/Form",tags:["autodocs"],argTypes:{}},m={args:{},render:()=>{const t=["Banan","Apple","Mango"];return n.jsxs(G,{children:[n.jsx(e,{size:12,children:n.jsx(r,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),n.jsx(e,{size:12,children:n.jsx(r,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),n.jsx(e,{size:12,children:n.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:t.map(o=>({id:o,name:o}))})}),n.jsx(e,{children:n.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const t=["A","B","C"],o=["Anledning A","Anledning B","Anledning C"];return n.jsx("div",{children:n.jsxs(G,{children:[n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:o.map(i=>n.jsx(b,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(h,{label:"Databas",description:"Välj databas att söka i",children:t.map(i=>n.jsx(k,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Namn",description:""})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Personnummer"})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:t.map(i=>({name:i,id:i}))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Ärendekod"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{children:"Sök"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};var d,l,p;m.parameters={...m.parameters,docs:{...(d=m.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
